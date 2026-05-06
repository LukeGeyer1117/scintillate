import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { register } from "../services/auth"
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import { toast } from 'sonner';

export const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (password != password2) {
            toast.error("Passwords do not match.");
            return;
        }

        // Disable the log in button
        setIsDisabled(true);

        try {
            await register(email, username, password, firstName, lastName);
            toast.success("Registration successful!");
        } catch (err: any) {
            console.error(err);
            toast.error(err.message);
            setIsDisabled(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="text" placeholder="your-email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Username</Label>
              <Input id="username" type="text" placeholder="epic-cool-username" required onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-2">
                <div className="flex-grow grid gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" type="text" placeholder="first-name" required onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="flex-grow grid gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" type="text" placeholder="last-name" required onChange={(e) => setLastName(e.target.value)} />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="super-secret-password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password2">Re-Type Password</Label>
                <Input id="password2" type="password" placeholder="super-secret-password" required onChange={(e) => setPassword2(e.target.value)} />
            </div>
            <div className="grid gap-2">
                <Button className="cursor-pointer hover:bg-indigo-600" type="submit" disabled={isDisabled}>
                    {isDisabled ? <Spinner /> : "Login"}
                </Button>
            </div>
          </div>
        </form>
    );
}
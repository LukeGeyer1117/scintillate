import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { login } from "../services/auth"
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Disable the log in button
        setIsDisabled(true);

        try {
            const data = await login(username, password);
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);

            toast.success("Login successful!");
            setTimeout(() => {
                navigate("/dashboard")
            }, 150)
        } catch (err) {
            console.error(err);
            toast.error("Login unsuccessful. Check your username and password and try again.");
            setIsDisabled(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Username</Label>
              <Input id="username" type="text" placeholder="epic-cool-username" required onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" placeholder="super-secret-password" required onChange={(e) => setPassword(e.target.value)} />
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
import { useState } from "react";
import { login } from "../api/auth";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login(username, password);

            // Get tokens from response
            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>

            <button type="submit">Login</button>
        </form>
    );
}
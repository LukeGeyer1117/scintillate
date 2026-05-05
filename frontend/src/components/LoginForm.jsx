import { useState } from "react";
import { login } from "../api/auth";
import { Input } from "./ui/input";

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
            <h2>Login</h2>

            <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Login</button>
        </form>
    );
}
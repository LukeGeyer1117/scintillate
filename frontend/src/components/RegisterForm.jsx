import { useState } from "react";
import { register } from "../api/auth";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function RegisterForm() {
    const [form, setForm] = useState({
        username:   "",
        password:   "",
        email:      "",
        first_name:  "",
        last_name:   ""  
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await register(form);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <Input placeholder="First Name" value={form.first_name} key={"first_name"} name={"first_name"} type="text" onChange={handleChange} />
            <Input placeholder="Last Name" value={form.last_name} key={"last_name"} name={"last_name"} type="text" onChange={handleChange} />
            <Input placeholder="Username" value={form.username} key={'username'} name={"username"} type="text" onChange={handleChange} />
            <Input placeholder="Email" value={form.email} key={'email'} name={'email'} type="text" onChange={handleChange} />
            <Input placeholder="Password" value={form.password} key={"password"} name={"password"} type="password" onChange={handleChange} />
            
            <Button type="submit" variant="outline">Register</Button>
        </form>
    );
}
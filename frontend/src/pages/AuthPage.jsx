import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import ThemeToggle from "@/components/ThemeToggle";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            <ThemeToggle />
            <Card>
                <CardHeader>
                    <CardTitle>{isLogin ? "Sign in" : "Create account"}</CardTitle>
                </CardHeader>
                <Button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Register" : "Login"}
                </Button>

                {isLogin ? <LoginForm /> : <RegisterForm />}
            </Card>
        </div>
    );
}
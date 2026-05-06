import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import ThemeToggle from "@/components/ThemeToggle";

import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription, CardAction } from "@/components/ui/card";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            <ThemeToggle />
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>{isLogin ? "Sign in" : "Create account"}</CardTitle>
                    <CardDescription>Enter your username and password below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                </CardContent>
                <CardFooter>
                    <p className="w-full text-center">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span onClick={() => setIsLogin(!isLogin)} className="underline cursor-pointer"> 
                            {isLogin ? "Register" : "Login"}
                        </span>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
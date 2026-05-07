import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/LoginForm";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

export default function LoginPage() {
    return (
        <div className="bg-background h-screen w-screen">
            <div className="w-full h-[80vh] flex flex-col gap-4 items-center absolute top-[20vh]">
                <h1 className="text-2xl font-semibold">Let's <span className="text-indigo-600">Scintillate</span></h1>
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>
                            Enter your username and password to login to your account.
                        </CardDescription>
                        <CardAction>
                            <Link to="/register">
                                <Button variant="link" className="cursor-pointer underline">Sign up</Button>
                            </Link>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
                <div className="flex flex-row items-center">
                    <Button variant="link" className="underline cursor-pointer">Terms & Conditions</Button>
                    &bull;
                    <Button variant="link" className="underline cursor-pointer">Privacy Policy</Button>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}
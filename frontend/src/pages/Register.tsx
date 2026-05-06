import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RegisterForm } from "@/components/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="bg-gray-200 h-screen w-screen">
            <div className="w-full h-[80vh] flex flex-col gap-4 items-center absolute top-[20vh]">
                <h1 className="text-2xl font-semibold">Let's <span className="text-indigo-600">Scintillate</span></h1>
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                        <CardDescription>
                            Enter your information to create an account.
                        </CardDescription>
                        <CardAction>
                            <Link to="/login">
                                <Button variant="link" className="cursor-pointer underline">Login</Button>
                            </Link>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <RegisterForm />
                    </CardContent>
                </Card>
                <div className="flex flex-row items-center">
                    <Button variant="link" className="underline cursor-pointer">Terms & Conditions</Button>
                    &bull;
                    <Button variant="link" className="underline cursor-pointer">Privacy Policy</Button>
                </div>
            </div>
        </div>
    );
}
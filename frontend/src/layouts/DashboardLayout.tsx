import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/mode-toggle";

import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/AppSidebar";

export default function DashboardLayout() {
    return (
        <SidebarProvider>

        <AppSidebar />

        <SidebarInset>
            <main>
                <div className="w-full flex flex-row justify-between items-center p-2">
                    <SidebarTrigger />
                    <ModeToggle />
                </div>
                <Outlet />
            </main>
        </SidebarInset>

        </SidebarProvider>
    );
}
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { Link } from "react-router-dom";

export default function AppSidebar() {
  return (
    <Sidebar >

      <SidebarHeader>
        Scintillate
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-col gap-2 p-2">

            <Link to="/dashboard" className="flex flex-row items-center gap-1 p-1 rounded-md hover:bg-primary hover:text-primary-foreground transition duration-150">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span className="text-lg font-semibold">Dashboard</span>
            </Link>

            <Link to="/projects" className="flex flex-row items-center gap-2 p-1 rounded-md hover:bg-primary hover:text-primary-foreground transition duration-150">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              <span className="text-lg font-semibold">Projects</span>
            </Link>

            <Link to="/settings">
              Settings
            </Link>

          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        Logged In
      </SidebarFooter>

    </Sidebar>
  );
}
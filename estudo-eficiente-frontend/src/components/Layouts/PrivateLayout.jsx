import { Outlet } from "react-router-dom";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import { AppSidebar } from "../../components/ui/app-sidebar";

export default function PrivateLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background px-6">
            <SidebarTrigger />
          </header>
          <main className="flex-1 p-6">
            <div className="mx-auto max-w-7xl">
              <Outlet />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

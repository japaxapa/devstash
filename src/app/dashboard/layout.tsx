import React from "react";
import { Search, FolderPlus, Plus, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-background text-foreground font-sans">
      {/* Top Bar */}
      <header className="flex h-16 items-center justify-between border-b border-border bg-card/50 px-6 pl-16 md:pl-6 backdrop-blur-sm">
        {/* Search Bar */}
        <div className="relative w-80 max-w-md">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar em tudo..."
            className="pl-9 pr-12 h-9 w-full bg-background/50 border-input"
            disabled
          />
          <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-9 gap-1.5 text-xs"
            disabled
          >
            <FolderPlus className="h-4 w-4" />
            <span>Nova coleção</span>
          </Button>
          <Button
            variant="default"
            className="h-9 gap-1.5 text-xs"
            disabled
          >
            <Plus className="h-4 w-4" />
            <span>Novo item</span>
          </Button>
        </div>
      </header>

      {/* Right Content Area */}
      <div className="flex flex-1 flex-row overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex md:w-56">
          <Sidebar />
        </div>

        {/* Mobile Drawer */}
        <Sheet>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                className="fixed top-4 left-4 z-50"
              >
                <Menu className="h-6 w-6" />
              </Button>
            }
          />
          <SheetContent
            side="left"
            className="p-0 w-64 md:hidden"
            showCloseButton={false}
          >
            <Sidebar />
          </SheetContent>
        </Sheet>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}

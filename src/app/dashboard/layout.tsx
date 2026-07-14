import React from "react";
import { Search, FolderPlus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background text-foreground font-sans">
      {/* Left Sidebar Placeholder */}
      <aside className="w-64 border-r border-border bg-card flex flex-col p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-card-foreground">Sidebar</h2>
        </div>
      </aside>

      {/* Right Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex h-16 items-center justify-between border-b border-border bg-card/50 px-6 backdrop-blur-sm">
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
            <Button variant="outline" className="h-9 gap-1.5 text-xs" disabled>
              <FolderPlus className="h-4 w-4" />
              <span>Nova coleção</span>
            </Button>
            <Button variant="default" className="h-9 gap-1.5 text-xs" disabled>
              <Plus className="h-4 w-4" />
              <span>Novo item</span>
            </Button>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}

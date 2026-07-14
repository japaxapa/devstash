"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code,
  Sparkles,
  Terminal,
  StickyNote,
  File,
  Image,
  Link as LinkIcon,
  PanelLeftClose,
  PanelLeftOpen,
  Star,
  Clock,
  Folder,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockUser, mockItemTypes, mockCollections } from "@/lib/mock-data";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Sparkles,
  Terminal,
  StickyNote,
  File,
  Image,
  Link: LinkIcon,
};

const typeName = (typeId: string) => typeId.replace("it-", "");
const getTypeColorValue = (typeId: string) => `var(--type-${typeName(typeId)})`;

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const favoriteCollections = mockCollections.filter((c) => c.isFavorite);
  const recentCollections = mockCollections.slice(0, 4);

  return (
    <aside
      className={cn(
        "border-r border-border bg-card flex flex-col transition-all duration-300 ease-in-out h-full",
        isOpen ? "w-64" : "w-16",
      )}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {isOpen && <span className="ml-3 font-bold text-lg">DevStash</span>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-accent rounded-md hidden md:block"
        >
          {isOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <section className="mbe-4">
            {isOpen && (
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Biblioteca
              </h3>
            )}
            <div className={cn("space-y-1", !isOpen && "flex flex-col gap-4")}>
              {[
                { name: "Favoritos", icon: Star, href: "/dashboard/favorites" },
                {
                  name: "Recentes",
                  icon: Clock,
                  href: "/dashboard/recent",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md transition-colors text-sm",
                    isOpen ? "px-2 py-1" : "justify-center",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {isOpen && <span>{item.name}</span>}
                </Link>
              ))}
            </div>
          </section>

          <section className="mbe-4">
            {isOpen && (
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Tipos
              </h3>
            )}
            <div className={cn("space-y-1", !isOpen && "flex flex-col gap-4")}>
              {mockItemTypes.map((type) => {
                const Icon = iconMap[type.icon];
                const typeColor = getTypeColorValue(type.id);
                return (
                  <Link
                    key={type.id}
                    href={`/items/${typeName(type.id)}`}
                    className={cn(
                      "flex items-center gap-3 rounded-md transition-colors text-sm",
                      isOpen ? "px-2 py-1" : "justify-center",
                      pathname.includes(type.id)
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <Icon
                      className="h-4 w-4"
                      style={{ color: typeColor }}
                    />
                    {isOpen && <span>{type.name}</span>}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mbe-4">
            {isOpen && (
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Favoritos
              </h3>
            )}
            <div className={cn("space-y-1", !isOpen && "flex flex-col gap-4")}>
              {favoriteCollections.map((col) => (
                <Link
                  key={col.id}
                  href={`/collections/${col.id}`}
                  className={cn(
                    "flex items-center gap-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md text-sm",
                    isOpen ? "px-2 py-1" : "justify-center",
                  )}
                >
                  <Folder className="h-4 w-4" />
                  {isOpen && <span>{col.name}</span>}
                </Link>
              ))}
            </div>
          </section>

          <section className="mbe-4">
            {isOpen && (
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Coleções recentes
              </h3>
            )}
            <div className={cn("space-y-1", !isOpen && "flex flex-col gap-4")}>
              {recentCollections.map((col) => (
                <Link
                  key={col.id}
                  href={`/collections/${col.id}`}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md text-sm",
                    isOpen ? "px-2 py-1" : "justify-center",
                  )}
                >
                  <Folder className="h-4 w-4" />
                  {isOpen && <span>{col.name}</span>}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={mockUser.image}
              alt={mockUser.name}
            />
            <AvatarFallback>{mockUser.name[0]}</AvatarFallback>
          </Avatar>
          {isOpen && (
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{mockUser.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                {mockUser.isPro ? "Plano Pro" : "Plano Free"}
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

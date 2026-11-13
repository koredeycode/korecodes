"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "work", path: "/#work" },
  { name: "projects", path: "/#projects" },
  { name: "blogs", path: "/blogs" },
  { name: "about", path: "/#about" },
  { name: "contact", path: "/#contact" },
];

const isActive = (path: string, pathname: string) => {
  if (path === "/") return pathname === "/";
  if (path === "/blogs") return pathname.startsWith("/blogs");
  if (path === "/#work") return pathname.startsWith("/work/");
  return false;
};

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center w-9 h-9 rounded-full border border-border text-accent">
        <CiMenuFries className="text-xl" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-card">
        <div className="mt-28 mb-12 text-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              <span className="text-accent">{"{"}</span>K
              <span className="text-accent">{"}"}</span>
            </h1>
            <p className="text-foreground text-xl font-semibold mt-2">Korecodes</p>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-3">
          {links.map((link, index) => {
            const active = isActive(link.path, pathname);
            return (
              <Link
                key={index}
                href={link.path}
                onClick={() => setOpen(false)} // close sheet on click
                className={`capitalize text-lg font-medium rounded-full px-6 py-2.5 transition-all ${
                  active
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return false; // hash links only "active" while scrolling on home
};

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-1">
      {links.map((link, index) => {
        const active = isActive(link.path, pathname);
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize font-medium rounded-full px-4 py-2 transition-all text-sm ${
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
  );
};

export default Nav;

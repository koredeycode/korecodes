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
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-7">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path == pathname && "text-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

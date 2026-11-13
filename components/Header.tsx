import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 text-foreground">
      <div className="min-h-8 container mx-auto flex justify-between items-center p-[15px] glass md:rounded-2xl rounded-none mt-3 shadow-sm">
        <Link href="/">
          <h1 className="text-3xl xl:text-4xl font-semibold">
            <span className="text-accent">{"{"}</span>K
            <span className="text-accent">{"}"}</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <ThemeToggle />
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
          >
            Hire me
          </Link>
        </div>
        <div className="xl:hidden flex items-center gap-3">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

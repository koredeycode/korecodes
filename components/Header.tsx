import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 text-foreground">
      <div className="container mx-auto px-4 pt-3">
        <div className="glass md:rounded-full rounded-2xl px-5 py-3 shadow-sm flex justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="text-3xl xl:text-4xl font-semibold leading-none">
              <span className="text-accent">{"{"}</span>K
              <span className="text-accent">{"}"}</span>
            </span>
            <span className="hidden sm:block text-sm text-muted font-medium tracking-wide leading-tight">
              Korecodes
            </span>
          </Link>

          <div className="hidden xl:block">
            <Nav />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="hidden sm:inline-flex px-5 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              Hire me
            </Link>
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="text-white w-full fixed top-0 z-50">
      <div className="min-h-8 container mx-auto flex justify-between items-center p-[15px] bg-accent-hover/20 backdrop-blur-md md:rounded-xl rounded-none">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">{"{"}</span>K
            <span className="text-accent">{"}"}</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiFileText,
  FiHome,
  FiMail,
} from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "/", icon: <FiHome /> },
  { label: "Projects", href: "/projects", icon: <FiArrowRight /> },
  { label: "Résumé", href: "/resume", icon: <FiFileText /> },
  { label: "Contact", href: "/contact", icon: <FiMail /> },
];

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl text-center"
      >
        {/* status badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            HTTP 404 · route not found
          </span>
        </div>

        {/* oversized number */}
        <p
          aria-hidden="true"
          className="text-accent/15 text-[clamp(8rem,26vw,15rem)] leading-[0.8] font-bold tracking-tighter select-none"
        >
          404
        </p>
        <div className="-mt-[0.42em] relative mb-5">
          <h1 className="h2">Lost in the graph.</h1>
        </div>

        <p className="text-muted max-w-md mx-auto mb-9 leading-relaxed">
          This route never resolved — the page either moved or was never here.
          Let&apos;s get you back to something real.
        </p>

        {/* primary actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors inline-flex items-center justify-center gap-2"
          >
            <FiArrowLeft /> Back home
          </Link>
          <button
            type="button"
            onClick={() => router.back()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-border hover:border-accent hover:text-accent transition-colors font-medium"
          >
            Go back
          </button>
        </div>

        {/* quick links */}
        <p className="section-title mb-4">Or jump to</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-border bg-card hover:bg-card-hover hover:border-accent/40 transition-all p-5 flex flex-col items-center gap-2 text-sm font-medium"
            >
              <span className="text-xl text-accent transition-transform group-hover:-translate-y-0.5">
                {link.icon}
              </span>
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-muted text-xs mt-10">
          Followed a broken link?{" "}
          <a
            href="mailto:koredey4u@gmail.com?subject=Broken%20link%20on%20korecodes.is-a.dev"
            className="text-accent hover:underline"
          >
            Let me know
          </a>
          .
        </p>
      </motion.div>
    </main>
  );
};

export default NotFound;

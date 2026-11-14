"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiX,
} from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Socials from "@/components/Socials";

const info = [
  {
    icon: <FiMail />,
    title: "Email",
    description: "koredey4u@gmail.com",
    href: "mailto:koredey4u@gmail.com",
  },
  {
    icon: <FiPhone />,
    title: "Phone",
    description: "+234 813 909 8183",
    href: "tel:+2348139098183",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    description: "Nigeria (GMT+1)",
  },
];

const Contact = () => {
  const [modal, setModal] = useState<"success" | "error" | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    const form = e.target as HTMLFormElement;
    const data = {
      firstname: (form.elements.namedItem("firstname") as HTMLInputElement)
        .value,
      lastname: (form.elements.namedItem("lastname") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      // Send to your API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        setModal("success");
      } else {
        setModal("error");
      }
    } catch {
      setModal("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-12 xl:px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          {/* left: intro + info */}
          <div className="flex-1">
            <p className="section-title mb-3">Contact</p>
            <h1 className="h2 mb-5">
              Tell me what
              <br />
              you&apos;re <span className="text-accent">building.</span>
            </h1>
            <p className="text-muted max-w-md leading-relaxed mb-8">
              Open to freelance work, collaborations, and full-time AI
              engineering roles. The form goes straight to my inbox — or reach
              me directly through any of these.
            </p>

            {/* availability */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 mb-10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-sm font-medium">
                Available for freelance &amp; full-time
              </span>
            </div>

            {/* info cards */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-10 max-w-xl">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4 hover:border-accent/40 transition-colors"
                >
                  <div className="w-11 h-11 shrink-0 rounded-full border border-border text-accent flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-muted text-xs uppercase tracking-wider">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-sm hover:text-accent transition-colors inline-flex items-center gap-1 break-all"
                      >
                        {item.description}
                        <FiArrowUpRight className="shrink-0" />
                      </a>
                    ) : (
                      <p className="font-medium text-sm">{item.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5">
              <span className="text-muted text-sm">Elsewhere:</span>
              <Socials
                containerStyles="flex gap-3"
                iconStyles="w-10 h-10 border border-border rounded-full flex justify-center items-center text-lg hover:border-accent hover:text-accent transition-all duration-300"
              />
            </div>
          </div>

          {/* right: form */}
          <div className="xl:w-[46%] w-full">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-7 xl:p-9 flex flex-col gap-5"
            >
              <h3 className="h3 mb-1">
                Send a <span className="text-accent">message</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstname"
                    className="text-xs text-muted uppercase tracking-wider"
                  >
                    Firstname *
                  </label>
                  <Input id="firstname" name="firstname" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="lastname"
                    className="text-xs text-muted uppercase tracking-wider"
                  >
                    Lastname
                  </label>
                  <Input id="lastname" name="lastname" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs text-muted uppercase tracking-wider"
                >
                  Email address *
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs text-muted uppercase tracking-wider"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="h-[180px]"
                  placeholder="What are you building, and where do I fit in?"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-1 px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      </motion.section>

      {/* submission confirmation modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            key="contact-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setModal(null)}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setModal(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-transparent flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <FiX />
              </button>

              <div
                className={`mx-auto mb-4 w-14 h-14 rounded-full border flex items-center justify-center text-3xl ${
                  modal === "success"
                    ? "text-accent border-accent/40 bg-accent/10"
                    : "text-red-400 border-red-400/40 bg-red-400/10"
                }`}
              >
                {modal === "success" ? <FiCheckCircle /> : <FiAlertCircle />}
              </div>

              <h3 className="h3 mb-2">
                {modal === "success" ? "Message sent!" : "Something went wrong"}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {modal === "success"
                  ? "Thanks for reaching out — it landed straight in my inbox. I'll get back to you as soon as I can."
                  : "Your message didn't go through. Please try again, or email me directly at koredey4u@gmail.com."}
              </p>

              <button
                type="button"
                autoFocus
                onClick={() => setModal(null)}
                className="w-full px-7 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
              >
                {modal === "success" ? "Done" : "Try again"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;

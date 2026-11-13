import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BsArrowLeft, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { caseStudies } from "@/constants/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Yusuf Akorede`,
    description: cs.tagline,
  };
}

const CaseStudyPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const idx = caseStudies.indexOf(cs);
  const prev = caseStudies[(idx + caseStudies.length - 1) % caseStudies.length];
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <main className="min-h-screen">
      <article className="container mx-auto max-w-4xl px-6 pt-36 xl:pt-44 pb-20">
        {/* header */}
        <Link
          href="/#work"
          className="text-muted hover:text-accent inline-flex items-center gap-2 text-sm mb-10 transition-colors"
        >
          <BsArrowLeft /> All work
        </Link>
        <p className="section-title mb-3">{cs.category}</p>
        <h1 className="h1 mb-4">{cs.title}</h1>
        <p className="text-muted text-lg mb-10 max-w-2xl leading-relaxed">
          {cs.tagline}
        </p>

        {/* meta */}
        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-y border-border py-6 mb-12 text-sm">
          <div>
            <dt className="text-muted text-xs uppercase tracking-wider mb-1">
              Year
            </dt>
            <dd className="font-medium">{cs.year}</dd>
          </div>
          <div>
            <dt className="text-muted text-xs uppercase tracking-wider mb-1">
              Role
            </dt>
            <dd className="font-medium">{cs.role}</dd>
          </div>
          <div>
            <dt className="text-muted text-xs uppercase tracking-wider mb-1">
              Stack
            </dt>
            <dd className="font-medium">{cs.stack.join(" · ")}</dd>
          </div>
        </dl>

        {/* links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {cs.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-border hover:border-accent hover:text-accent transition-colors text-sm font-medium inline-flex items-center gap-2"
            >
              {link.label.includes("Source") ? <BsGithub /> : null}
              {link.label} <BsArrowUpRight className="text-xs" />
            </a>
          ))}
        </div>

        {/* hero image */}
        <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-border mb-14">
          <Image
            src={cs.image}
            alt={`${cs.title} — ${cs.tagline}`}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
            priority
          />
        </div>

        {/* overview */}
        <h2 className="h3 mb-5">Overview</h2>
        <p className="text-muted leading-relaxed mb-14 text-[15px] xl:text-base">
          {cs.overview}
        </p>

        {/* highlights */}
        <h2 className="h3 mb-8">What&apos;s inside</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {cs.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold mb-2 text-foreground">{h.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>

        {/* learned */}
        {cs.learned && (
          <div className="rounded-2xl border border-accent/40 bg-accent/5 p-6 xl:p-8 mb-16">
            <p className="section-title mb-3">What it taught me</p>
            <p className="text-foreground leading-relaxed">{cs.learned}</p>
          </div>
        )}

        {/* prev / next */}
        <nav className="grid sm:grid-cols-2 gap-4 border-t border-border pt-10">
          <Link
            href={`/work/${prev.slug}`}
            className="group rounded-2xl border border-border p-6 hover:border-accent/40 hover:bg-card transition-all"
          >
            <p className="text-muted text-xs uppercase tracking-wider mb-2 inline-flex items-center gap-2">
              <BsArrowLeft /> Previous
            </p>
            <p className="font-semibold group-hover:text-accent transition-colors">
              {prev.title}
            </p>
            <p className="text-muted text-sm mt-1">{prev.tagline}</p>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group rounded-2xl border border-border p-6 hover:border-accent/40 hover:bg-card transition-all sm:text-right"
          >
            <p className="text-muted text-xs uppercase tracking-wider mb-2 inline-flex items-center gap-2 sm:flex-row-reverse">
              Next <BsArrowLeft className="rotate-180" />
            </p>
            <p className="font-semibold group-hover:text-accent transition-colors">
              {next.title}
            </p>
            <p className="text-muted text-sm mt-1">{next.tagline}</p>
          </Link>
        </nav>
      </article>
    </main>
  );
};

export default CaseStudyPage;

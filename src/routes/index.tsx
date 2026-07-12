import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Container,
  Figma,
  Github,
  Layers,
  Linkedin,
  Mail,
  Moon,
  Rocket,
  Sparkles,
  Sun,
} from "lucide-react";
import portrait from "@/assets/abhinaya-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <div className="min-h-screen text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[var(--brand-purple)] opacity-20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-[var(--brand-cyan)] opacity-15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--brand-emerald)] opacity-10 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-mono-tech text-sm font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-emerald)] animate-pulse-glow" />
            <span>abhinaya<span className="text-gradient-brand">.dev</span></span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#certificates" className="hover:text-foreground transition">Certificates</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <button
            onClick={() => setLight((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface hover:border-[var(--brand-purple)] transition"
            aria-label="Toggle theme"
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24">
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <div className="md:col-span-3">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-mono-tech text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-emerald)]" />
              open to internships · 2026
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Hii, I'm abhinaya  <span className="text-gradient-brand">FullStack Developer</span>
              <br /> &
              <span className="text-gradient-brand"> DevOps</span> 
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Hi, I'm <span className="text-foreground font-semibold">Abhinaya Aghni Fadhila</span> —
              an Information Systems student at Universitas Gunadarma. I ship AI agents, craft clean
              interfaces, and orchestrate secure local infra with Docker & Cloudflare Tunnels — with
              a product manager's eye for outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-cyan)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-purple-500/20 transition hover:shadow-purple-500/40"
              >
                <Mail className="h-4 w-4" /> Contact Us
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold hover:border-[var(--brand-purple)]/60 transition"
              >
                See Projects <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-tech text-xs text-muted-foreground">
              <span>◇ AI Agents</span>
              <span>◇ Frontend</span>
              <span>◇ Cloudflare / Docker</span>
              <span>◇ Product</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative mx-auto w-fit">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[var(--brand-purple)] via-[var(--brand-cyan)] to-[var(--brand-emerald)] opacity-40 blur-2xl animate-pulse-glow" />
              <div className="relative overflow-hidden rounded-3xl border border-border glow-ring">
                <img
                  src={portrait}
                  alt="Abhinaya Aghni Fadhila"
                  width={340}
                  height={420}
                  className="h-[420px] w-[340px] object-cover"
                />
              </div>
              <div className="absolute -left-14 top-6 rounded-xl border border-border bg-surface/90 backdrop-blur px-3 py-2 font-mono-tech text-xs shadow-lg animate-float">
                <Container className="mr-1 inline h-3.5 w-3.5 text-[var(--brand-cyan)]" /> docker
              </div>
              <div className="absolute -right-16 top-20 rounded-xl border border-border bg-surface/90 backdrop-blur px-3 py-2 font-mono-tech text-xs shadow-lg animate-float-delayed">
                <Cloud className="mr-1 inline h-3.5 w-3.5 text-[var(--brand-purple)]" /> cloudflare
              </div>
              <div className="absolute -left-10 -bottom-6 rounded-xl border border-border bg-surface/90 backdrop-blur px-3 py-2 font-mono-tech text-xs shadow-lg animate-float-slow">
                <Figma className="mr-1 inline h-3.5 w-3.5 text-[var(--brand-emerald)]" /> figma
              </div>
              <div className="absolute -right-14 -bottom-10 rounded-xl border border-border bg-surface/90 backdrop-blur px-3 py-2 font-mono-tech text-xs shadow-lg animate-float">
                <span className="mr-1 inline text-[var(--brand-purple)]">JS</span> javascript
              </div>
              <div className="absolute -right-8 top-4 rounded-xl border border-border bg-surface/90 backdrop-blur px-3 py-2 font-mono-tech text-xs shadow-lg animate-float-delayed">
                <span className="mr-1 inline text-[var(--brand-cyan)]">TW</span> tailwind
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-cyan)]">
              // showcase
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Selected projects, built with care.</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            Cross-functional projects across AI, Product, Infra, Data, and Frontend.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ProjectLinkCard
            index="01"
            tone="purple"
            icon={<Bot className="h-3.5 w-3.5" />}
            tag="AI Agent"
            title="IT Support Assistant AI Agent"
            description="Internal-facing AI agent that triages IT support questions and drafts first-response answers. Built end-to-end in Langflow with retrieval and structured prompts."
            href="https://github.com/bhii06/IT-Support-Assistent-Langflow"
            className="md:col-span-2"
          />
          <ProjectLinkCard
            index="02"
            tone="emerald"
            icon={<Rocket className="h-3.5 w-3.5" />}
            tag="Product"
            title="fixpict.com"
            description="Product Manager for a web-based image tool. Led a small squad through discovery, Figma UI/UX, and delivery."
            href="https://fixpict.com"
          />
          <ProjectLinkCard
            index="03"
            tone="emerald"
            icon={<Layers className="h-3.5 w-3.5" />}
            tag="Data"
            title="FIKTI Data Science Bootcamp"
            description="End-to-end data pipeline project — cleaning, EDA, modeling, and evaluation. Scored 100/100."
            href="https://github.com/bhii06/Data-Analist-fikti-learning"
          />
          <ProjectLinkCard
            index="04"
            tone="purple"
            icon={<Sparkles className="h-3.5 w-3.5" />}
            tag="Frontend · Native CSS"
            title="Instagram UI · Native CSS"
            description="Rebuilt Instagram's core UI from scratch using only Native HTML & CSS — a fundamentals-first take on layout, flex, and grid."
            href="https://bhii06.github.io/Instagram-Mockup/"
          />
          <ProjectLinkCard
            index="05"
            tone="cyan"
            icon={<Sparkles className="h-3.5 w-3.5" />}
            tag="Frontend · Tailwind"
            title="Instagram UI · Tailwind CSS"
            description="Same Instagram clone rebuilt with Tailwind CSS — utility-first workflow, faster iteration, and cleaner responsive states."
            href="https://bhii06.github.io/instagram-tailwind/"
          />
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 pb-24">
        <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-cyan)]">
          // stack
        </p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Core skills & tools.</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SkillGroup title="AI & Cloud" items={["Langflow", "LLM Prompting", "AI Agents", "AWS Cloud", "Gen AI on AWS"]} />
          <SkillGroup
            title="SWE & DevOps"
            items={["JavaScript", "HTML", "Native CSS", "Tailwind CSS", "Docker", "Cloudflare Tunnel"]}
          />
          <SkillGroup title="Data Analytics" items={["Google Colab", "Data Cleaning", "EDA", "Model Building", "Evaluation"]} />
          <SkillGroup title="Product & Design" items={["Figma UI/UX", "Roadmapping", "Team Leadership", "Product Lifecycle"]} />
        </div>
      </section>

      <section id="certificates" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-emerald)]">
              // credentials
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Certifications.</h2>
            <ul className="mt-8 space-y-3">
              <CertItem org="IBM SkillsBuild" title="Introduction to Large Language Models" note="Foundations of modern LLM systems" href="https://drive.google.com/file/d/18nN-DpU4ok2fYRNJKZ7JYWzLyj-H7RXj/view?usp=sharing" />
              <CertItem org="IBM SkillsBuild" title="Intelligent by Design: Build an AI Agent" note="Agent architecture & orchestration" href="https://drive.google.com/file/d/1OwAm0tMzDIANQc9IarNcU-82i4ooywnj/view?usp=sharing" />
              <CertItem org="Dicoding Academy" title="Belajar Dasar AI" note="AI concepts · Data · ML · Deep Learning" href="https://drive.google.com/file/d/1rwKq9tKPeSAWTtEg56GhVI4K-hzZpLrp/view?usp=sharing" />
              <CertItem
                org="Dicoding Academy"
                title="Belajar Dasar Cloud & Gen AI di AWS"
                note="AWS Cloud Services · Cloud Practitioner · Gen AI on AWS"
                href="https://drive.google.com/file/d/1WNve3A-QJl9OgYH3V3v_w4HwSlP0JXWL/view?usp=sharing"
              />
              <CertItem org="RevoU Coding Camp" title="Intro to Software Engineering" note="1-week certified intensive" href="https://drive.google.com/file/d/1bpTuIJDmQd84IkICWhSnHCsCyDyJ0c3e/view?usp=sharing" />
              <CertItem
                org="BEM FIKTI · Universitas Gunadarma"
                title="Data Science Bootcamp — Exploring the Data Universe"
                note='Predicate "A" · Score 100 for Code, Visualization & Data Handling'
                href="https://drive.google.com/file/d/1X7xGWNBRVWgL59EGpFZkfSi-v2yTJ6Gb/view?usp=sharing"
                highlight
              />
            </ul>
          </div>

          <div>
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-cyan)]">
              // language
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Global-ready.</h2>

            <div className="mt-8 bento-card space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-cyan)]/10">
                  <span className="text-sm font-bold text-[var(--brand-cyan)]">EN</span>
                </div>
                <div>
                  <div className="text-xl font-bold">English</div>
                  <div className="font-mono-tech text-xs text-muted-foreground">Intermediate</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-emerald)]/10">
                  <span className="text-sm font-bold text-[var(--brand-emerald)]">ID</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Bahasa Indonesia</div>
                  <div className="font-mono-tech text-xs text-muted-foreground">Native</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Let's <span className="text-gradient-brand">build something</span>.
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Open to internships, collaborations, and product experiments across AI, frontend,
                and infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <ContactLink icon={<Mail className="h-4 w-4" />} label="Email" href="mailto:01abhinayaaghnifadhila8g@gmail.com" />
              <ContactLink icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" href="https://www.linkedin.com/in/abhinaya-fadhila-817558381" />
              <ContactLink icon={<Github className="h-4 w-4" />} label="GitHub" href="https://github.com/bhii06" />
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 font-mono-tech text-xs text-muted-foreground md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Abhinaya Aghni Fadhila&nbsp;</span>
            <span>designed & built with care · dark-mode first</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/50 p-3">
      <div className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--brand-emerald)]/30 bg-[var(--brand-emerald)]/10 px-2.5 py-1 font-mono-tech text-[10px] text-[var(--brand-emerald)]">
      ✦ {children}
    </span>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bento-card">
      <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-cyan)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span className="h-1 w-1 rounded-full bg-[var(--brand-purple)]" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertItem({
  org,
  title,
  note,
  href,
  highlight,
}: {
  org: string;
  title: string;
  note: string;
  href?: string;
  highlight?: boolean;
}) {
  const content = (
    <li
      className={`group flex items-start gap-4 rounded-xl border p-4 transition hover:border-[var(--brand-purple)]/50 ${
        highlight
          ? "border-[var(--brand-emerald)]/40 bg-[var(--brand-emerald)]/5"
          : "border-border bg-surface"
      }`}
    >
      <div
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          highlight ? "bg-[var(--brand-emerald)]/20" : "bg-background"
        }`}
      >
        <Sparkles
          className={`h-4 w-4 ${
            highlight ? "text-[var(--brand-emerald)]" : "text-[var(--brand-cyan)]"
          }`}
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-semibold">{title}</span>
          <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground">
            · {org}
          </span>
        </div>
        <div className="mt-0.5 text-xs text-muted-foreground">{note}</div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </li>
  );
  if (!href) return content;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  );
}


function ContactLink({
  icon,
  label,
  href,
  primary,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
        primary
          ? "bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-cyan)] text-primary-foreground shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
          : "border border-border bg-surface hover:border-[var(--brand-purple)]/60"
      }`}
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectLinkCard({
  index,
  tone,
  icon,
  tag,
  title,
  description,
  href,
  className = "",
}: {
  index: string;
  tone: "purple" | "cyan" | "emerald";
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}) {
  const toneVar =
    tone === "purple"
      ? "var(--brand-purple)"
      : tone === "cyan"
      ? "var(--brand-cyan)"
      : "var(--brand-emerald)";
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`bento-card group flex flex-col transition hover:border-[var(--brand-purple)]/60 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono-tech"
          style={{
            borderColor: `color-mix(in oklab, ${toneVar} 40%, transparent)`,
            background: `color-mix(in oklab, ${toneVar} 10%, transparent)`,
            color: toneVar,
          }}
        >
          {icon} {tag}
        </span>
        <span className="font-mono-tech text-xs text-muted-foreground">{index}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold md:text-2xl">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-6 inline-flex items-center gap-1.5 font-mono-tech text-xs text-foreground">
        Visit project
        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

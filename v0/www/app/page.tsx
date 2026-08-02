import { Fragment } from "react"

import {
  about,
  earlier,
  experience,
  hero,
  identity,
  nav,
  projects,
  services,
  skills,
  socials,
} from "@/lib/site"

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ricardo Jorge",
  alternateName: "RJ",
  url: "https://www.rj11.io",
  jobTitle: "AI Product Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisbon",
    addressCountry: "PT",
  },
  sameAs: ["https://github.com/rj11io", "https://www.linkedin.com/in/rj11io"],
  knowsAbout: [
    "AI product engineering",
    "TypeScript",
    "React",
    "Next.js",
    "AI agents",
    "Data visualisation",
  ],
}

const LINK =
  "underline decoration-foreground/25 underline-offset-[3px] transition-colors hover:decoration-primary hover:text-primary"

function Arrow({ external = false }: { external?: boolean }) {
  return (
    <span aria-hidden className="font-mono">
      {external ? "↗" : "→"}
    </span>
  )
}

function Dot() {
  return (
    <span aria-hidden className="text-muted-foreground/50 select-none">
      {" · "}
    </span>
  )
}

function Wordmark() {
  return (
    <span className="font-mono text-sm font-medium tracking-tight">
      rj<span className="text-primary">11</span>.io
    </span>
  )
}

function SectionHeading({ no, title }: { no: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span aria-hidden className="font-mono text-sm text-primary">
        {no}
      </span>
      <h2 className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
        {title}
      </h2>
      <span aria-hidden className="h-px flex-1 translate-y-[-3px] bg-border" />
    </div>
  )
}

function Section({
  id,
  no,
  title,
  children,
}: {
  id: string
  no: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <SectionHeading no={no} title={title} />
      <div className="mt-10">{children}</div>
    </section>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95">
      <div className="mx-auto flex h-14 w-full max-w-[46rem] items-center justify-between px-6 sm:px-8">
        <a href="#top" aria-label="Back to top">
          <Wordmark />
        </a>
        <nav className="flex items-center gap-5">
          <div className="hidden items-center gap-5 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={identity.cv}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-primary transition-opacity hover:opacity-80"
          >
            CV <Arrow external />
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
        {identity.name}
        <Dot />
        {identity.location}
      </p>
      <h1 className="mt-6 font-serif text-5xl/[1.05] font-medium tracking-tight text-balance sm:text-6xl/[1.05] md:text-7xl/[1.05]">
        AI Product Engineer<span className="text-primary">.</span>
      </h1>
      <p className="mt-8 max-w-xl text-lg/relaxed text-pretty text-muted-foreground">
        {hero.lede}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={`mailto:${identity.email}`}
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-mono text-sm text-primary-foreground transition-opacity hover:opacity-90"
        >
          Email me <Arrow />
        </a>
        <a
          href={identity.cv}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
        >
          Read the CV <Arrow external />
        </a>
        <span className="font-mono text-xs text-muted-foreground">
          <a href={identity.github} target="_blank" rel="noreferrer" className={LINK}>
            GitHub
          </a>
          <Dot />
          <a href={identity.linkedin} target="_blank" rel="noreferrer" className={LINK}>
            LinkedIn
          </a>
        </span>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" no="01" title="About">
      <div className="max-w-prose space-y-5">
        {about.map((text, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "font-serif text-xl/relaxed text-pretty"
                : "text-[15px]/relaxed text-pretty text-foreground/80"
            }
          >
            {text}
          </p>
        ))}
      </div>
    </Section>
  )
}

function Services() {
  return (
    <Section id="services" no="02" title="What I do">
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {services.map((service) => (
          <div key={service.name} className="border-t border-border pt-5">
            <h3 className="font-serif text-xl/6 font-medium text-balance">
              {service.name}
            </h3>
            <p className="mt-3 text-sm/relaxed text-pretty text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Work() {
  return (
    <Section id="career" no="05" title="Career">
      <div className="space-y-12">
        {experience.map((job) => (
          <article
            key={job.company}
            className="grid gap-x-10 gap-y-2 md:grid-cols-[8rem_1fr]"
          >
            <p className="font-mono text-xs/6 whitespace-nowrap text-muted-foreground">
              {job.period}
            </p>
            <div className="min-w-0">
              <h3 className="font-serif text-lg/6 font-medium text-balance">
                {job.role}
                <span className="ml-2.5 font-sans text-sm font-normal text-muted-foreground">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className={LINK}
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </span>
              </h3>
              <p className="mt-2.5 max-w-prose text-sm/relaxed text-pretty text-foreground/80">
                {job.summary}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 border-t border-border pt-6">
        <h3 className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Earlier
        </h3>
        <ul className="mt-5 space-y-2.5">
          {earlier.map((job) => (
            <li
              key={job.company}
              className="grid gap-x-10 text-sm text-foreground/80 md:grid-cols-[8rem_1fr]"
            >
              <span className="font-mono text-xs/6 whitespace-nowrap text-muted-foreground">
                {job.period}
              </span>
              <span className="min-w-0">
                {job.role}
                <Dot />
                <span className="text-muted-foreground">{job.company}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-sm">
          <a
            href={identity.cv}
            target="_blank"
            rel="noreferrer"
            className="text-primary transition-opacity hover:opacity-80"
          >
            The full story is in the CV <Arrow external />
          </a>
        </p>
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" no="04" title="Projects">
      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group block border-t border-border pt-5"
          >
            <h3 className="flex items-baseline justify-between gap-4 font-serif text-xl/6 font-medium">
              <span className="transition-colors group-hover:text-primary">
                {project.name}
              </span>
              <span
                aria-hidden
                className="font-mono text-sm text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
              >
                {"↗"}
              </span>
            </h3>
            <p className="mt-3 text-sm/relaxed text-pretty text-muted-foreground">
              {project.description}
            </p>
            <p className="mt-3 font-mono text-xs text-muted-foreground/70">
              {project.period}
            </p>
          </a>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" no="03" title="Skills">
      <div className="space-y-5">
        {skills.map((group) => (
          <div
            key={group.name}
            className="grid gap-x-10 gap-y-1 sm:grid-cols-[11rem_1fr]"
          >
            <h3 className="text-sm/relaxed font-medium">{group.name}</h3>
            <p className="min-w-0 text-sm/relaxed text-foreground/80">
              {group.items.map((item, i) => (
                <Fragment key={i}>
                  {i > 0 && <Dot />}
                  {item}
                </Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" no="06" title="Contact">
      <h3 className="max-w-2xl font-serif text-3xl/tight font-medium tracking-tight text-balance sm:text-4xl/tight">
        Building something ambitious?{" "}
        <em className="text-muted-foreground">Point me at it.</em>
      </h3>
      <p className="mt-6 max-w-prose text-[15px]/relaxed text-pretty text-foreground/80">
        I&apos;m always open to exploring exceptional opportunities: AI
        products, data-heavy applications, or production foundations. Reach out
        if you&apos;re keen on working together.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={`mailto:${identity.email}`}
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-mono text-sm text-primary-foreground transition-opacity hover:opacity-90"
        >
          {identity.email}
        </a>
      </div>
      <p className="mt-8 font-mono text-xs text-muted-foreground">
        {socials.map((social, i) => (
          <Fragment key={social.label}>
            {i > 0 && <Dot />}
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={LINK}
            >
              {social.label}
            </a>
          </Fragment>
        ))}
      </p>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-[46rem] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-8 font-mono text-xs text-muted-foreground sm:px-8">
        <p>
          © {new Date().getFullYear()} Ricardo Jorge
          <Dot />
          <Wordmark />
        </p>
        <p className="text-muted-foreground/60">Press &quot;D&quot; for dark mode</p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PERSON_JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="mx-auto w-full max-w-[46rem] px-6 sm:px-8">
        <Hero />
        <div className="space-y-24 pb-28 sm:space-y-28">
          <About />
          <Services />
          <Skills />
          <Projects />
          <Work />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

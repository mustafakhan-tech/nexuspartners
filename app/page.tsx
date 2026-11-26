import Image from "next/image";
import BrandLanes from "@/components/BrandLanes";
import ContactForm from "@/components/ContactForm";
import IntentLink from "@/components/IntentLink";
import { forBrands, forCreators, niches, site, stats, steps } from "@/lib/content";

const wrap = "mx-auto max-w-page px-6 md:px-10";
const btn = "inline-block rounded-full px-7 py-3.5 font-display text-[15px] font-semibold no-underline transition-opacity hover:opacity-85";

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-cream focus:px-3 focus:py-1 focus:text-night">Skip to content</a>
      <header className={`${wrap} flex items-center justify-between gap-6 py-5`}>
        <a href="/" className="flex items-center gap-3 no-underline">
          <Image src="/img/nexus-mark.png" alt="" width={40} height={41} priority />
          <span className="whitespace-nowrap font-display text-[17px] font-semibold">{site.name}</span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-6 text-[16px]">
          <a href="#brands-section" className="hidden no-underline hover:underline md:inline">For brands</a>
          <a href="#creators-section" className="hidden no-underline hover:underline md:inline">For creators</a>
          <a href="#how" className="hidden no-underline hover:underline md:inline">How it works</a>
          <a href="#contact" className={`${btn} bg-cream px-5 py-2.5 text-night`}>Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className={`${wrap} pb-4 pt-14 md:pt-24`}>
          <h1 className="max-w-[16ch] text-[clamp(2.5rem,6.6vw,5.6rem)] leading-[1.02]">
            Creators and brands, matched and closed.
          </h1>
          <p className="dim mt-8 max-w-[56ch] text-[1.2rem]">
            Nexus Partners is a talent management agency. We pair creators with brands that fit their audience, then handle the pitch, the negotiation, the contract and the delivery.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <IntentLink intent="brand" className={`${btn} bg-cream text-night`}>Partner as a brand</IntentLink>
            <IntentLink intent="creator" className={`${btn} border border-cream text-cream`}>Apply as a creator</IntentLink>
          </div>
        </section>

        <BrandLanes />

        <section aria-label="Results" className={`${wrap}`}>
          <dl className="m-0 grid grid-cols-2 gap-y-10 border-y border-[color:var(--line)] py-12 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="pr-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="m-0">
                  <span className="block font-display text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-none">{s.value}</span>
                  <span className="dim mt-3 block text-[16px]">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={`${wrap} grid gap-6 pt-24 md:grid-cols-2`}>
          <div id="brands-section" className="rounded-3xl bg-cream p-8 text-night md:p-10">
            <h2 className="mb-3 text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">For brands</h2>
            <p className="mb-8 text-[1.1rem] opacity-75">The right creator for your product, and a campaign handled from brief to delivery.</p>
            <ul className="m-0 mb-10 list-none space-y-4 p-0">
              {forBrands.map((t) => <li key={t} className="flex gap-3"><Check />{t}</li>)}
            </ul>
            <IntentLink intent="brand" className={`${btn} bg-night text-cream`}>Partner as a brand</IntentLink>
          </div>
          <div id="creators-section" className="rounded-3xl border border-[color:var(--line)] bg-ash p-8 md:p-10">
            <h2 className="mb-3 text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">For creators</h2>
            <p className="dim mb-8 text-[1.1rem]">We handle the business side so you can focus on making content.</p>
            <ul className="m-0 mb-10 list-none space-y-4 p-0">
              {forCreators.map((t) => <li key={t} className="flex gap-3"><Check />{t}</li>)}
            </ul>
            <IntentLink intent="creator" className={`${btn} bg-cream text-night`}>Apply as a creator</IntentLink>
          </div>
        </section>

        <section id="how" aria-labelledby="how-h" className={`${wrap} pt-28`}>
          <h2 id="how-h" className="mb-12 max-w-[18ch] text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">How a deal comes together</h2>
          <ol className="m-0 grid list-none gap-0 p-0 md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-[color:var(--line)] py-6 md:border-l md:border-t-0 md:px-6 md:py-2 md:first:border-l-0 md:first:pl-0">
                <span className="dim block font-display text-[15px]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-3 mt-3 text-[1.25rem]">{s.title}</h3>
                <p className="dim mb-0 text-[16px]">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="roster-h" className={`${wrap} pt-28`}>
          <div className="grid items-center gap-10 rounded-3xl border border-[color:var(--line)] p-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:p-12">
            <div>
              <h2 id="roster-h" className="mb-4 text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.08]">100+ creators on six continents</h2>
              <p className="dim max-w-[48ch] text-[1.1rem]">
                Our roster covers almost every niche, with audiences across North America, the UK, Africa and beyond. Tell us what you&apos;re selling and we&apos;ll send you the creators who fit.
              </p>
              <IntentLink intent="roster" className={`${btn} mt-4 bg-cream text-night`}>Request the full roster</IntentLink>
            </div>
            <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
              {niches.map((n) => (
                <li key={n} className="rounded-full border border-[color:var(--line)] px-4 py-2 text-[16px]">{n}</li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="founder-h" className={`${wrap} grid items-center gap-10 pt-28 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16`}>
          <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-3xl">
            <Image src="/img/mustafa.jpg" alt="Mustafa Khan, founder of Nexus Partners" fill sizes="(min-width: 768px) 340px, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 id="founder-h" className="mb-6 text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.08]">Run by someone who closes</h2>
            <p className="dim max-w-[56ch] text-[1.1rem]">
              Nexus Partners was started by {site.founder.name}, who learned to sell knocking on doors. He runs every deal himself, from the first email to the final post.
            </p>
            <a href={site.founder.href} className="underline decoration-cream/40 underline-offset-4 hover:decoration-cream">More about Mustafa</a>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-h" className={`${wrap} grid gap-12 pt-28 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16`}>
          <div>
            <h2 id="contact-h" className="mb-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">Let&apos;s talk</h2>
            <p className="dim max-w-[40ch] text-[1.1rem]">Brands, tell us what you&apos;re launching. Creators, tell us about your content. Either way, it starts here.</p>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className={`${wrap} mt-28 flex flex-col gap-4 border-t border-[color:var(--line)] py-10 text-[15px] md:flex-row md:items-center md:justify-between`}>
        <span className="flex items-center gap-3">
          <Image src="/img/nexus-mark.png" alt="" width={28} height={29} />
          <span className="font-display">{site.name}</span>
        </span>
        <span className="dim">© {new Date().getFullYear()} Nexus Partners Agency</span>
      </footer>
    </>
  );
}

import { brands, type Brand } from "@/lib/brands";

function Mark({ brand }: { brand: Brand }) {
  const [, , w, h] = (brand.viewBox ?? "0 0 24 24").split(" ").map(Number);
  const aspect = w / h;
  const height = brand.wordmark ? Math.min(34, 86 / aspect) : Math.min(26, 40 / aspect);
  return (
    <svg viewBox={brand.viewBox} style={{ height, width: height * aspect }} className="shrink-0" fill="currentColor" aria-hidden="true">
      <path d={brand.path} />
    </svg>
  );
}

function Chip({ brand, i }: { brand: Brand; i: number }) {
  return (
    <span
      className="chip flex h-[62px] shrink-0 items-center gap-3 rounded-full border border-[color:var(--line)] bg-ash px-7 text-cream"
      style={{ ["--delay" as string]: `${(i % 7) * -0.7}s` }}
    >
      {brand.path && <Mark brand={brand} />}
      {!brand.wordmark && <span className="whitespace-nowrap font-display text-[1.05rem] font-medium">{brand.name}</span>}
    </span>
  );
}

const rotate = (n: number) => [...brands.slice(n), ...brands.slice(0, n)];
const rows = [
  { items: brands, speed: "70s", reverse: false },
  { items: rotate(5), speed: "84s", reverse: true },
  { items: rotate(9), speed: "96s", reverse: false },
];

export default function BrandLanes() {
  return (
    <section aria-labelledby="brands" className="py-16 md:py-24">
      <h2 id="brands" className="mx-auto mb-10 max-w-page px-6 text-center text-[clamp(1.1rem,2vw,1.4rem)] font-medium md:px-10">
        Brands our creators have worked with
      </h2>
      <ul className="sr-only">
        {brands.map((b) => <li key={b.name}>{b.name}</li>)}
      </ul>
      <div className="lanes space-y-5 overflow-hidden py-3" aria-hidden="true">
        {rows.map((row, r) => (
          <div key={r} className="lane" data-reverse={row.reverse} style={{ ["--speed" as string]: row.speed }}>
            {[...row.items, ...row.items].map((b, i) => (
              <span key={`${b.name}-${i}`} aria-hidden={i >= row.items.length ? "true" : undefined}>
                <Chip brand={b} i={i + r * 3} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

import { ContactForm } from "@/components/contact-form";
import { FloatingCTA } from "@/components/floating-cta";
import { Section, SectionHeader } from "@/components/section";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:pt-20">
          <div className="flex-1">
            <p className="text-sm font-semibold text-brand-600">
              {site.tagline}
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
              {site.hero.title}
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              {site.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
              >
                お問い合わせ
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700"
              >
                事業内容を見る
              </a>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border border-brand-100 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold text-brand-600">
              {site.name}
            </p>
            <p className="mt-3 text-sm text-slate-600">{site.description}</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              {site.hero.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section id="about">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeader title={site.about.title} lead={site.about.body} />
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
            <ul className="grid gap-4 text-sm text-slate-700">
              {site.about.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="services" className="bg-slate-50">
        <SectionHeader title={site.services.title} />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {site.services.items.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="strengths">
        <SectionHeader title={site.strengths.title} />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {site.strengths.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-100 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="achievements" className="bg-brand-900 text-white">
        <SectionHeader title={site.achievements.title} />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.achievements.items.map((item) => (
            <div key={item.label} className="rounded-3xl bg-white/10 p-6">
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="recruit" className="bg-slate-50">
        <SectionHeader title={site.recruit.title} lead={site.recruit.lead} />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {site.recruit.positions.map((position) => (
            <div
              key={position.title}
              className="rounded-3xl border border-slate-100 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {position.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {position.description}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
        >
          {site.recruit.linkText}
        </a>
      </Section>

      <Section id="message">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeader title={site.message.title} />
            <p className="mt-6 text-base text-slate-600">
              {site.message.body}
            </p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-brand-600">{site.name}</p>
            <p className="mt-4 text-lg font-semibold text-slate-900">
              {site.message.name}
            </p>
            <p className="mt-3 text-sm text-slate-600">
              "現場の信頼を守る技術集団として、次の10年も挑戦を続けます。"
            </p>
          </div>
        </div>
      </Section>

      <Section id="overview" className="bg-slate-50">
        <SectionHeader title={site.overview.title} />
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-100 bg-white">
          <dl className="divide-y divide-slate-100">
            {site.overview.items.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 px-6 py-4 sm:grid-cols-[180px_1fr]"
              >
                <dt className="text-sm font-semibold text-slate-600">
                  {item.label}
                </dt>
                <dd className="text-sm text-slate-700">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section id="contact">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeader title={site.contact.title} lead={site.contact.lead} />
            <div className="mt-6 grid gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-700">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
                  お電話
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {site.contact.phone}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
                  メール
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {site.contact.email}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">フォームから相談</h3>
            <ContactForm />
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="text-base font-semibold text-slate-900">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-slate-600">{site.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-4">
            {site.footer.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>

      <FloatingCTA />
    </main>
  );
}

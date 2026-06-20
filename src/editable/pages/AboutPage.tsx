import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="editable-page-enter bg-[#f7f4ef] text-[#111]">
        <section className="border-b border-black bg-[#2f80ed] text-white">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-7xl">{pagesContent.about.title}</h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] border-x border-black bg-white lg:grid-cols-[1.45fr_0.55fr]">
          <article className="border-b border-black p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-16">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#2f80ed]">About {SITE_CONFIG.name}</p>
            <p className="editorial-serif mt-6 text-3xl font-bold leading-[1.25] sm:text-4xl">{pagesContent.about.description}</p>
            <div className="article-content mt-10 space-y-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="editable-stagger grid bg-[#f7f4ef]">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="border-b border-black p-7 last:border-b-0 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2f80ed]">0{index + 1}</p>
                <h2 className="editorial-serif mt-4 text-3xl font-black leading-tight">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-black/65">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="border-y border-black bg-[#171717] text-white">
          <div className="mx-auto flex max-w-[var(--editable-container)] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.045em] sm:text-5xl">Read the releases shaping public conversation.</h2>
            <Link href="/search" className="inline-flex w-fit bg-[#2f80ed] px-6 py-4 text-xs font-black uppercase tracking-[0.18em]">Explore the archive</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

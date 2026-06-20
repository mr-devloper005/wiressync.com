import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { getEditableCategory, getEditableExcerpt, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const dateLabel = (post: SitePost) => {
  const date = post.publishedAt || post.createdAt
  if (!date) return 'Latest update'
  return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function ReleaseListItem({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <article className="editable-reveal grid gap-5 border-b border-black/12 py-10 sm:grid-cols-[132px_1fr]">
      <div className="border-black/12 text-left text-sm leading-6 text-black/58 sm:border-r sm:pr-6 sm:text-right">
        <p>on <span className="font-semibold text-[var(--slot4-accent)]">{dateLabel(post)}</span></p>
        <p>in <span className="font-semibold text-[var(--slot4-accent)]">{getEditableCategory(post)}</span></p>
        <p className="mt-2 text-[11px] font-black uppercase tracking-[0.16em] text-black/36">Release {String(index + 1).padStart(2, '0')}</p>
      </div>
      <div className="min-w-0">
        <Link href={href} className="group block">
          <h2 className="max-w-[680px] text-3xl font-black leading-[1.05] tracking-[-0.035em] text-[#111] transition group-hover:text-[var(--slot4-accent)] sm:text-4xl">
            {post.title}
          </h2>
          <p className="mt-4 max-w-[620px] text-base leading-7 text-black/68">{getEditableExcerpt(post, 235)}</p>
          <span className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[var(--slot4-accent)]">
            Continue reading <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </article>
  )
}

function Sidebar({ posts, primaryTask, primaryRoute }: { posts: SitePost[]; primaryTask: TaskKey; primaryRoute: string }) {
  const recent = posts.slice(0, 5)
  return (
    <aside className="space-y-10 lg:sticky lg:top-36 lg:self-start">
      <section>
        <h2 className="text-4xl font-black tracking-[-0.04em]">About Us</h2>
        <p className="mt-6 text-base leading-7 text-black/68">
          {SITE_CONFIG.name} publishes media distribution updates, company announcements, public relations notes, and release-ready stories for readers who need clear source context.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-black tracking-[-0.04em]">Recent Posts</h2>
        <div className="mt-5 divide-y divide-black/12">
          {recent.map((post) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="block py-4 text-base leading-6 text-[var(--slot4-accent)] transition hover:text-black">
              {post.title}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="border-b-4 border-black/12 pb-3 text-sm font-black uppercase tracking-[0.08em]">Pages</h3>
        <div className="divide-y divide-black/12">
          {[
            ['About Us', '/about'],
            ['Contact Us', '/contact'],
            ['Home', '/'],
            ['Submit a Release', '/create'],
            ['Search Archive', '/search'],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="block py-3 text-base text-[var(--slot4-accent)] transition hover:text-black">{label}</Link>
          ))}
        </div>
      </section>
    </aside>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  return (
    <section className="editable-page-enter bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1068px] px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-10 border-b border-black/12 pb-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl">Media distribution updates, published with newsroom clarity.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-black/66">{pagesContent.home.hero.description}</p>
        </div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,704px)_310px]">
          <div>
            {posts.length ? (
              posts.slice(0, 9).map((post, index) => (
                <ReleaseListItem key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
              ))
            ) : (
              <div className="border border-dashed border-black/25 bg-white p-10 text-center">
                <h2 className="text-3xl font-black tracking-[-0.035em]">No media updates yet</h2>
                <p className="mt-3 text-sm text-black/60">Real posts from the publishing feed will appear here automatically.</p>
              </div>
            )}
          </div>
          <Sidebar posts={posts} primaryTask={primaryTask} primaryRoute={primaryRoute} />
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const more = posts.slice(9, 15)
  if (!more.length) return null
  return (
    <section className="bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1068px] px-4 pb-14 sm:px-6">
        <h2 className="border-b border-black/12 pb-4 text-3xl font-black tracking-[-0.035em]">More Media Distribution</h2>
        <div>
          {more.map((post, index) => (
            <ReleaseListItem key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 9} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit(_props: HomeSectionProps) {
  return null
}

export function EditableTimeCollections({ primaryRoute }: HomeSectionProps) {
  return (
    <section className="bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1068px] px-4 pb-16 sm:px-6">
        <form action="/search" className="grid gap-4 border-y border-black/18 bg-white p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h3 className="text-2xl font-black tracking-[-0.035em]">Search the media archive</h3>
            <p className="mt-2 text-sm text-black/60">Find releases by title, topic, category, or company.</p>
          </div>
          <label className="flex border border-black/25 bg-white sm:min-w-[340px]">
            <Search className="ml-4 mt-4 h-4 w-4 text-black/45" />
            <input name="q" placeholder="Search updates" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.12em] text-white">Search</button>
          </label>
          <Link href={primaryRoute} className="hidden" />
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return null
}

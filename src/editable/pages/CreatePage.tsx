'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, ImageIcon, Lock, PlusCircle, Send, Sparkles } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const taskIcon: Record<string, typeof FileText> = {
  article: FileText,
  listing: Sparkles,
  classified: PlusCircle,
  image: ImageIcon,
  profile: Sparkles,
  pdf: FileText,
  sbm: ArrowRight,
}

const fieldClass = 'w-full border border-black/20 bg-white px-4 py-3 text-sm font-semibold text-[#111] outline-none transition placeholder:text-black/35 focus:border-[#2f80ed] focus:ring-2 focus:ring-[#2f80ed]/15'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const [task, setTask] = useState<TaskKey>((enabledTasks[0]?.key || 'article') as TaskKey)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || enabledTasks[0]

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'uncategorized',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="editable-page-enter min-h-screen bg-[#f4f4f4] text-[#111]">
          <section className="border-b border-black/10">
            <div className="mx-auto max-w-[1068px] px-4 py-12 sm:px-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f80ed]">Publishing desk</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-black/64">{pagesContent.create.locked.description}</p>
            </div>
          </section>
          <section className="mx-auto grid max-w-[1068px] gap-14 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,704px)_310px]">
            <div className="border-y border-black/12 bg-white p-6 sm:p-10">
              <Lock className="h-7 w-7 text-[#2f80ed]" />
              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em]">Sign in to prepare a release</h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-black/64">Your publishing desk is ready when you are. Sign in to draft an announcement and keep the release details together.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex items-center gap-2 bg-[#2f80ed] px-6 py-3 text-sm font-black text-white transition hover:bg-[#111]">Login <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 border border-black/20 bg-white px-6 py-3 text-sm font-black transition hover:border-[#2f80ed] hover:text-[#2f80ed]">Sign up</Link>
              </div>
            </div>
            <aside className="self-start border-t-4 border-black/12 pt-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-black/48">Release workflow</p>
              <ol className="mt-4 space-y-4 text-sm leading-6 text-black/68">
                <li><span className="mr-2 font-black text-[#2f80ed]">01</span>Choose your distribution format.</li>
                <li><span className="mr-2 font-black text-[#2f80ed]">02</span>Add the headline and source-ready copy.</li>
                <li><span className="mr-2 font-black text-[#2f80ed]">03</span>Save your draft for review.</li>
              </ol>
            </aside>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
      <EditableSiteShell>
      <main className="editable-page-enter min-h-screen bg-[#f4f4f4] text-[#111]">
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-[1068px] px-4 py-12 sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f80ed]">{pagesContent.create.hero.badge}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{pagesContent.create.hero.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/64">{pagesContent.create.hero.description}</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-[1068px] gap-14 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,704px)_310px]">
          <form onSubmit={submit} className="border-y border-black/12 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-black/12 pb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f80ed]">Create {activeTask?.label || 'post'}</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">{pagesContent.create.formTitle}</h2>
              </div>
              <span className="border border-black/15 px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">{session.name}</span>
            </div>

            <div className="mt-6 grid gap-4">
              <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Media release title" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
                <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Source or campaign URL" />
              </div>
              <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Optional media image URL" />
              <textarea className={`${fieldClass} min-h-24`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Distribution summary" required />
              <textarea className={`${fieldClass} min-h-52`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Release body, source notes, contact details, or announcement copy" required />
            </div>

            {created ? (
              <div className="mt-5 border-l-4 border-[#2f80ed] bg-[#eef6ff] p-4 text-[#111]">
                <p className="flex items-center gap-2 text-sm font-black"><CheckCircle2 className="h-5 w-5 text-[#2f80ed]" /> {pagesContent.create.successTitle}</p>
                <p className="mt-1 text-sm text-black/65">{created.title}</p>
              </div>
            ) : null}

            <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-[#2f80ed] px-6 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#111]">
              <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
            </button>
          </form>

          <aside className="space-y-10 lg:sticky lg:top-36 lg:self-start">
            <section>
              <h2 className="text-4xl font-black tracking-[-0.04em]">Distribution type</h2>
              <p className="mt-5 text-base leading-7 text-black/64">Choose the publishing surface before drafting your update.</p>
              <div className="mt-5 divide-y divide-black/12 border-y border-black/12">
                {enabledTasks.map((item) => {
                  const Icon = taskIcon[item.key] || FileText
                  const active = item.key === task
                  return (
                    <button key={item.key} type="button" onClick={() => setTask(item.key)} className={`group flex w-full items-start gap-3 py-4 text-left transition ${active ? 'text-[#2f80ed]' : 'hover:text-[#2f80ed]'}`}>
                      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                      <span><span className="block text-sm font-black">{item.label}</span><span className="mt-1 block text-xs leading-5 text-black/58 group-hover:text-black/70">{item.description}</span></span>
                    </button>
                  )
                })}
              </div>
            </section>
            <section>
              <h3 className="border-b-4 border-black/12 pb-3 text-sm font-black uppercase tracking-[0.08em]">Draft status</h3>
              <p className="mt-4 text-sm leading-6 text-black/64">Drafts are saved after you submit the form.</p>
            </section>
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}

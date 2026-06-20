import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="editable-page-enter bg-[#f7f4ef] text-[#111]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] border-x border-black bg-white lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center border-b border-black p-7 sm:p-12 lg:border-b-0 lg:border-r lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f80ed]">Create account</p>
            <h1 className="editorial-serif mt-3 text-4xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-black pt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-[#2f80ed] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="flex flex-col justify-center bg-[#171717] p-8 text-white sm:p-12 lg:p-16">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2f80ed]">{pagesContent.auth.signup.badge}</p>
            <h2 className="editorial-brand mt-5 max-w-xl text-6xl font-black leading-[0.92] tracking-[-0.055em] sm:text-8xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm font-semibold leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="editable-stagger mt-8 grid gap-3 text-sm font-black uppercase tracking-[0.12em] text-white/75">
              <span className="border-t border-white/25 pt-3">Prepare announcements</span>
              <span className="border-t border-white/25 pt-3">Save publisher identity</span>
              <span className="border-t border-white/25 pt-3">Submit media updates</span>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}

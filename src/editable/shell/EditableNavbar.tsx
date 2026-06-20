'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const mediaRoute = SITE_CONFIG.taskViews.mediaDistribution || '/media-distribution'
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Media Distribution', href: mediaRoute },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#f3f3f3] text-[#111] shadow-[0_1px_0_rgba(0,0,0,.08)]">
      <div className="h-6 bg-[#2f93e8]" />
      <div className="mx-auto flex min-h-[96px] max-w-[1068px] items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" className="editorial-brand truncate text-2xl font-black text-[#2f80ed] sm:text-3xl">
          {SITE_CONFIG.name}
        </Link>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="editable-link-underline font-medium text-black/85 hover:text-[#2f80ed]">
              {item.label}
            </Link>
          ))}
          <Link href="/search" aria-label="Search" className="text-black/70 hover:text-[#2f80ed]"><Search className="h-4 w-4" /></Link>
        </nav>

        <div className="hidden items-center gap-4 text-xs font-black uppercase tracking-[0.12em] xl:flex">
          {session ? (
            <>
              <Link href="/create" className="inline-flex items-center gap-2"><UserRound className="h-4 w-4" /> {session.name}</Link>
              <button type="button" onClick={logout} className="inline-flex items-center gap-2 hover:text-[#2f80ed]"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-[#2f80ed]">Log in</Link>
              <Link href="/signup" className="bg-[#2f80ed] px-4 py-3 text-white">Sign up</Link>
            </>
          )}
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/20 lg:hidden" aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-[1068px] gap-px bg-black/10">
            {[...links, { label: 'Search', href: '/search' }, ...(session ? [{ label: session.name, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.08em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-white px-4 py-3 text-left text-sm font-black uppercase tracking-[.08em]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}

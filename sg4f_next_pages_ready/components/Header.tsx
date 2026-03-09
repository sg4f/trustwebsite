'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const nav = [
  { href: '', label: 'Home' },
  { href: '(sections)/model', label: 'Our Model' },
  { href: '(sections)/verification', label: 'Verification Loop' },
  { href: '(sections)/trust-layer', label: 'Trust Layer' },
  { href: '(sections)/kpis', label: 'KPI Explorer' },
  { href: '(sections)/programs', label: 'Programs (VIAs)' },
  { href: '(sections)/pilot', label: 'Level Up Senegal' },
  { href: '(sections)/it-stack', label: 'IT Stack' },
  { href: '(sections)/outcomes', label: 'Outcomes & Safeguarding' },
  { href: '(sections)/partners', label: 'Partners' },
  { href: '(sections)/updates', label: 'Updates' },
  { href: '(sections)/contact', label: 'Contact' },
]

export default function Header({ locale }: { locale: string }){
  const pathname = usePathname()
  const prefix = `/${locale}/`
  return (
    <header className="hero-gradient text-white">
      <div className="container py-4 flex items-center justify-between">
        <Link href={prefix} className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-black tracking-wide">SG4F</div>
          <span className="hidden md:inline text-white/70 text-sm">Sport Grounds 4 Future</span>
        </Link>
        <nav className="hidden xl:flex gap-3 flex-wrap">
          {nav.map(item => {
            const url = prefix + item.href
            const active = pathname?.startsWith(url)
            return (
              <Link key={item.href}
                className={clsx(
                  'px-2 py-1 rounded-md text-white/85 hover:text-white hover:bg-white/10 transition',
                  active && 'bg-white/15 text-white'
                )}
                href={url}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link href={pathname?.replace(`/${locale}/`, '/en/') ?? '/en'} className="btn btn-secondary">EN</Link>
          <Link href={pathname?.replace(`/${locale}/`, '/fr/') ?? '/fr'} className="btn btn-secondary">FR</Link>
          <a href={\`mailto:info@sportgrounds4future.org?subject=Partner%20with%20SG4F\`} className="hidden md:inline btn btn-primary">Contact us</a>
        </div>
      </div>
      <div className="container pb-10 pt-8">
        <h1 className="text-4xl md:text-6xl font-extrabold">Impact you can verify — live.</h1>
        <p className="mt-2 text-white/85 max-w-3xl">Co‑designed with communities, privacy‑by‑design, and audit‑ready summaries for partners.</p>
        <div className="mt-5 flex gap-3 flex-wrap">
          <Link href={\`${prefix}(sections)/verification\`} className="btn btn-primary">See the verification loop</Link>
          <Link href={\`${prefix}(sections)/pilot\`} className="btn btn-secondary">See the Senegal pilot</Link>
        </div>
      </div>
    </header>
  )
}

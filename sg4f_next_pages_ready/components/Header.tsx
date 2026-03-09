'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const navItems = [
  { href: '', label: 'Home' },
  { href: 'model', label: 'Our Model' },
  { href: 'verification', label: 'Verification' },
  { href: 'programs', label: 'Programs' },
  { href: 'pilot', label: 'Senegal' },
  { href: 'outcomes', label: 'Outcomes' },
  { href: 'contact', label: 'Contact' },
];

export default function Header({ locale = 'en' }: { locale?: string }) {
  const pathname = usePathname() ?? '';
  const base = `/${locale}/`;

  return (
    <header className="bg-slate-900 text-white shadow-xl">
      <div className="container mx-auto px-4 flex items-center justify-between py-6">
        <Link href={base} className="text-2xl font-black text-sky-400 tracking-tighter">
          SG4F
        </Link>
        
        <nav className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => {
            const url = item.href ? `${base}${item.href}` : base;
            const active = pathname === url || pathname === url + '/';
            return (
              <Link 
                key={item.href} 
                href={url}
                className={clsx(
                  "text-sm transition-colors",
                  active ? "text-sky-400 font-bold" : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex gap-2 text-xs">
          <Link href="/en" className={clsx("p-1 px-2 rounded", locale === 'en' ? "bg-sky-600" : "bg-slate-800")}>EN</Link>
          <Link href="/fr" className={clsx("p-1 px-2 rounded", locale === 'fr' ? "bg-sky-600" : "bg-slate-800")}>FR</Link>
        </div>
      </div>
    </header>
  );
}

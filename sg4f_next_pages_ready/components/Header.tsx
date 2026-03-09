'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ locale }: { locale: string }) {
  const pathname = usePathname();
  const prefix = `/${locale}/`;

  return (
    <header className="hero-gradient text-white">
      <div className="container py-4 flex items-center justify-between">
        <Link href={prefix} className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-black tracking-wide">SG4F</div>
        </Link>
        {/* …add the rest of your header UI here… */}
      </div>
    </header>
 

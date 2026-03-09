import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/locales'
import VitrineClient from '@/components/VitrineClient'

export default async function Page({ params:{ locale } }:{ params:{ locale: Locale } }){
  const dict = await getDictionary(locale)
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold text-navy">Sport Grounds 4 Future</h2>
        <p className="mt-4 text-slate-600">
          Impact you can verify — live.
        </p>
      </section>

      <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
        <h3 className="text-xl font-bold mb-6">{dict.home.what}</h3>
        <VitrineClient />
      </section>
    </div>
  )
}

export const runtime = 'edge'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DataFlowBG from '@/components/DataFlow'

export default function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }){
  return (
    <>
      <Header locale={locale} />
      <DataFlowBG />
      <main className="container -mt-8 md:-mt-12 bg-white rounded-md p-4 md:p-6 shadow -translate-y-10">
        {children}
      </main>
      <Footer />
    </>
  )
}

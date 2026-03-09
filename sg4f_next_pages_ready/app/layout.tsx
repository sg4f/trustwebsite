import Header from '@/components/Header';
import '@/app/globals.css';

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <Header locale={locale} />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white border-t py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sport Grounds 4 Future
        </footer>
      </body>
    </html>
  );
}

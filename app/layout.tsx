import type {Metadata} from 'next';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: 'Moviey - Akwam Streamer',
  description: 'نظام بث ومproxy متكامل لموقع أكوام مع تخطي حماية الروابط وتوافق الميديا.',
  openGraph: {
    title: 'Moviey - Akwam Streamer',
    description: 'نظام بث ومproxy متكامل لموقع أكوام مع تخطي حماية الروابط وتوافق الميديا.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moviey - Akwam Streamer',
    description: 'نظام بث ومproxy متكامل لموقع أكوام مع تخطي حماية الروابط وتوافق الميديا.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white" suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

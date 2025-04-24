import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lilieth Chacón | Portfolio',
  description: 'Portfolio personal de Lilieth Chacón - Desarrolladora Full Stack',
  keywords: ['portfolio', 'desarrollo web', 'full stack', 'react', 'next.js'],
  authors: [{ name: 'Lilieth Chacón' }],
  creator: 'Lilieth Chacón',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://lilieth-portfolio.vercel.app',
    title: 'Lilieth Chacón | Portfolio',
    description: 'Portfolio personal de Lilieth Chacón - Desarrolladora Full Stack',
    siteName: 'Lilieth Chacón Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lilieth Chacón | Portfolio',
    description: 'Portfolio personal de Lilieth Chacón - Desarrolladora Full Stack',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <ParticlesBackground />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
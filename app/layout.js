import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MediMeet - Doctors Appointment App',
  description: 'Book your appointments with ease',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 flex text-gray-200">
                <div className="flex items-center gap-4">
                  <Link href="/">
                    <Image
                      src="/logo-single.png"
                      alt="Medimeet Logo"
                      width={200}
                      height={60}
                      className="h-10 w-auto object-contain"
                    />
                  </Link>
                  <p className="text-sm">
                    Copyright © {new Date().getFullYear()} MediMeet (Pty) Ltd.
                    All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

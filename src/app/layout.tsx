import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ClientLayout from "./client_layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stacc.site Dashboard",
  description: "Created by Dylan De La Rosa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} light dark:bg-dark`}>
        <Providers>
          <ClientLayout>
            <main className="">{children}</main>
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}

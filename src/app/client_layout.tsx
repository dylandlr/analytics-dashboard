"use client";

import { ThemeProvider } from "next-themes";
import DarkModeBtn from "./components/DarkModeBtn";
import "daisyui/dist/full.css";
import { Navbar } from "react-daisyui";
import { ReactNode } from "react";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="bg-light dark:bg-dark">
        <Navbar.Start />
        {children}
        <Navbar.End />
      </main>
    </ThemeProvider>
  );
}

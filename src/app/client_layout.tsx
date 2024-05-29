"use client";

import { ThemeProvider } from "next-themes";
import "daisyui/dist/full.css";
import { ReactNode, useRef, useState, useEffect } from "react";
import { useFloating, shift, offset } from "@floating-ui/react";
import Logo from "@/app/components/Logo";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { x, y, strategy, refs, floatingStyles } = useFloating({
    placement: "bottom-start",
    middleware: [shift(), offset(10)],
  });

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200); // Adjust the delay as needed
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="dropdown-hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost m-1"
        ref={refs.setReference}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current text-dark dark:text-light">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
      {open && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 text-dark bg-light dark:text-light dark:bg-dark rounded-box w-52"
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            ...floatingStyles,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <li>
            <a className="text-dark dark:text-light" href="/analytics">
              Analytics
            </a>
          </li>
          <li>
            <a className="text-dark dark:text-light" href="/users">
              Users
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="bg-light dark:bg-dark">
        <div className="navbar rounded-box drop-shadow-lg">
          <div className="flex-none dark:text-white text-dark px-2">
            <Logo />
          </div>
          <div className="flex-1 px-2 lg:flex-none">
            <a className="text-lg font-bold text-dark dark:text-light">
              Stacc Dashboard
            </a>
          </div>
          {/* to make the navigation div in the center in the middle of the navbar
          we need to use the flex-1 class to make the div take up the remaining space
          and then use the px-2 class to add padding on the x-axis. finally we will
          */}
          {/* <div className="flex justify-center flex-1 px-2 text-dark dark:text-light">
            <a className="btn btn-ghost m-1">Home</a>
            <a className="btn btn-ghost m-1">About</a>
            <a className="btn btn-ghost m-1">Contact</a>
          </div> */}
          <div className="flex justify-end flex-1 px-2">
            <div className="flex items-stretch">
              <a className="btn btn-ghost m-1 hover:bg-dark">{children}</a>
              <Dropdown />
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

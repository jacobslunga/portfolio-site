"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import ProjectsDialog from "./ProjectsDialog";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        id="main-header"
        className="fixed top-0 left-0 right-0 h-12 w-full bg-white dark:bg-black border-b border-stone-200 dark:border-white/20 z-40"
      >
        <div className="max-w-2xl mx-auto h-full px-8 flex flex-row items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold tracking-tight">Jacob Slunga</h1>
          </Link>
          <div>
            <Button
              variant="secondary"
              onClick={() => setIsOpen(true)}
              className="font-mono text-xs uppercase tracking-wider"
            >
              My Projects
            </Button>
          </div>
        </div>
      </header>

      <ProjectsDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

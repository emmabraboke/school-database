"use client"

import Link from "next/link";
import { useState } from "react";
import RecordForm from "./form";

export default function Header(): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <nav className="h-20 border-b">
          <div className="flex items-center justify-between h-full w-full max-w-7xl mx-auto px-6">
            <div className="flex items-center">
              <Link href="/" className="text-pink-500 text-3xl font-bold">
                School Database
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="text-lg bg-pink-500 text-white font-medium rounded-md px-4 h-12"
            >
              Add Record
            </button>
          </div>
        </nav>
      </header>
      <RecordForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

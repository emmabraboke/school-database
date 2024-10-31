"use client";

import { useStorageContext } from "@/providers/storage-provider";
import React from "react";

interface DefaultProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RecordForm({
  isOpen,
  setIsOpen,
}: DefaultProps): React.ReactNode {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [gradYear, setGradYear] = React.useState("");
    const [currentClass, setCurrentClass] = React.useState("");
    const {addNewRecord} = useStorageContext();
    
    const handleAddRecord = () => {
        if (!name || !age || !email || !gradYear || !currentClass) {
            alert("All fields are required");
            return;
        }
        const newRecord = {
            name,
            age,
            email,
            gradYear,
            currentClass,
        };
        addNewRecord(newRecord);
        setIsOpen(false);
    }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="rounded-md border border-pink-500 p-4 w-full h-fit max-w-md shadow-md bg-white">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl">New Record</p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-red-400 text-xs"
          >
            CLOSE
          </button>
        </div>
        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-2">
            <label htmlFor="name" className="w-full">
              <span className="text-sm text-black/40">Name</span>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                className="text-sm h-10 w-full border border-black/20 rounded focus-visible:border-pink-500 focus-visible:outline-none placeholder:text-black/40 px-4"
              />
            </label>
            <label htmlFor="age" className="w-full">
              <span className="text-sm text-black/40">Age</span>
              <input
                type="text"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g. 20"
                className="text-sm h-10 w-full border border-black/20 rounded focus-visible:border-pink-500 focus-visible:outline-none placeholder:text-black/40 px-4"
              />
            </label>
          </div>
          <div className="">
            <label htmlFor="email" className="w-full">
              <span className="text-sm text-black/40">Email Address</span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. johndoe@email.com"
                className="text-sm h-10 w-full border border-black/20 rounded focus-visible:border-pink-500 focus-visible:outline-none placeholder:text-black/40 px-4"
              />
            </label>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="grad_year" className="w-full">
              <span className="text-sm text-black/40">Graduation Year</span>
              <input
                type="text"
                id="grad_year"
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
                placeholder="e.g. 2023"
                className="text-sm h-10 w-full border border-black/20 rounded focus-visible:border-pink-500 focus-visible:outline-none placeholder:text-black/40 px-4"
              />
            </label>
            <label htmlFor="class" className="w-full">
              <span className="text-sm text-black/40">Class</span>
              <input
                type="text"
                id="class"
                value={currentClass}
                onChange={(e) => setCurrentClass(e.target.value)}
                placeholder="e.g. SS3"
                className="text-sm h-10 w-full border border-black/20 rounded focus-visible:border-pink-500 focus-visible:outline-none placeholder:text-black/40 px-4"
              />
            </label>
          </div>
          <div className="flex items-center gap-2"></div>
          <div className="mt-10">
            <button onClick={handleAddRecord} className="h-10 rounded-md px-4 text-white bg-pink-500 w-full">
              Add Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useStorageContext } from "@/providers/storage-provider";
import { useState } from "react";

export default function Home(): React.ReactNode {
  const { records } = useStorageContext();
  const [search, setSearch] = useState("");
  return (
    <div className="space-y-3 mt-10 pb-20">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="w-full max-w-xs ml-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by graduation year"
            className="text-sm h-10 w-full border border-black/20 rounded focus-visible:border-black/30 focus-visible:outline-none placeholder:text-black/40 px-4"
          />
        </div>
      </div>
      <table className="table-fixed table-bordered border-pink-500 w-full max-w-screen-xl mx-auto bg-white border rounded-lg border-collapse">
        <thead className=" text-left">
          <tr className="border-b border-pink-500 flex items-center gap-10 py-3">
            <th className="px-4 py-2 w-1/5">Name</th>
            <th className="px-4 py-2 w-1/5">Email</th>
            <th className="px-4 py-2 w-1/5">Age</th>
            <th className="px-4 py-2 w-1/5">Class</th>
            <th className="px-4 py-2 w-1/5">Graduation Year</th>
          </tr>
        </thead>
        <tbody>
          {records
            .filter((record) => record.gradYear.includes(search))
            .map((record, id) => (
              <tr
                key={id}
                className="border-b border-pink-500 flex items-center  gap-10 py-3"
              >
                <td
                  title={record.name}
                  className="px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap w-1/5"
                >
                  {record.name}
                </td>
                <td
                  title={record.email}
                  className="px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap w-1/5"
                >
                  {record.email}
                </td>
                <td className="px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap w-1/5">
                  {record.age}
                </td>
                <td className="px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap w-1/5">
                  {record.currentClass}
                </td>
                <td className="px-4 py-2 overflow-hidden text-ellipsis whitespace-nowrap w-1/5">
                  {record.gradYear}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

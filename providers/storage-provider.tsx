"use client";

import { StudentRecord, placeholderStudentRecords } from "@/data/data";
import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
  useState,
  Fragment,
} from "react";

type StorageContextType = {
  records: StudentRecord[];
  addNewRecord: (record: StudentRecord) => void;
};

const initialState: StorageContextType = {
  records: [],
  addNewRecord: () => {},
};

const StorageContext = createContext<StorageContextType>(initialState);

export default function StorageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [records, setRecords] = useState<Array<StudentRecord>>(
    placeholderStudentRecords
  );

  const addNewRecord = (record: StudentRecord) => {
    setRecords([record, ...records]);
  };
  const storeValues = useMemo(() => {
    return { records, addNewRecord };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [records, addNewRecord]);

  return (
    <StorageContext.Provider value={storeValues}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorageContext() {
  return useContext(StorageContext);
}

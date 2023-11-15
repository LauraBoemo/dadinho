import React, { createContext, useContext, useState } from "react";

interface ErrorContextType {
  error: string;
  setError: (message: string) => void;
}

const ErrorContext = createContext<ErrorContextType>(null!);

export function ErrorProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<any>(null);
  return <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>;
}

export function useError() {
  return useContext(ErrorContext);
}

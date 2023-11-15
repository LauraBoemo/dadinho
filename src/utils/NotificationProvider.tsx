import React, { createContext, useContext, useState } from "react";

interface NotificationContextType {
  notification: string;
  setNotification: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextType>(null!);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notification, setNotification] = useState<any>(null);
  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>{children}</NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}

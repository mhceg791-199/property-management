import { createContext, useState } from "react";

export const careerModalContext = createContext();

export function CareerModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <careerModalContext.Provider value={{ open, setOpen }}>
      {children}
    </careerModalContext.Provider>
  );
}

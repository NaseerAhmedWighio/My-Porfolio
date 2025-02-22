"use client";
import { createContext, useContext, useState } from "react";

// Context create karein
const HireContext = createContext();

export const HireProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HireContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </HireContext.Provider>
  );
};

// Custom hook for easy usage
export const useHireState = () => {
  return useContext(HireContext);
};

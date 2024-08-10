"use client"


import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context state
interface SidebarContextState {
  selectedIconId: number;
  setSelectedIconId: (id: number) => void;
  activeDir: string;
  setActiveDir: (dir: string) => void;
  activeMode: string;
  setActiveMode: (mode: string) => void;
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
  activeLayout: string;
  setActiveLayout: (layout: string) => void;
  isCardShadow: boolean;
  setIsCardShadow: (shadow: boolean) => void;
  isLayout: string;
  setIsLayout: (layout: string) => void;
  isBorderRadius: number;
  setIsBorderRadius: (radius: number) => void;
  isCollapse: boolean;
  setIsCollapse: (collapse: boolean) => void;

}

// Create the context with an initial value
const SidebarContext = createContext<SidebarContextState>({
  selectedIconId: 1,
  setSelectedIconId: () => { },
  activeDir: '',
  setActiveDir: () => { },
  activeMode: '',
  setActiveMode: () => { },
  activeTheme: '',
  setActiveTheme: () => { },
  activeLayout: '',
  setActiveLayout: () => { },
  isCardShadow: false,
  setIsCardShadow: () => { },
  isLayout: '',
  setIsLayout: () => { },
  isBorderRadius: 0,
  setIsBorderRadius: () => { },
  isCollapse: false,
  setIsCollapse: () => { },

});

// Define the type for the children prop
interface SidebarProviderProps {
  children: ReactNode;
}
// Create the provider component
export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [selectedIconId, setSelectedIconId] = useState<number>(1);
  const [activeDir, setActiveDir] = useState<string>('');
  const [activeMode, setActiveMode] = useState<string>('');
  const [activeTheme, setActiveTheme] = useState<string>('');
  const [activeLayout, setActiveLayout] = useState<string>('');
  const [isCardShadow, setIsCardShadow] = useState<boolean>(true);
  const [isLayout, setIsLayout] = useState<string>('');
  const [isBorderRadius, setIsBorderRadius] = useState<number>(0);
  const [isCollapse, setIsCollapse] = useState<boolean>(false);



  return (
    <SidebarContext.Provider
      value={{
        selectedIconId,
        setSelectedIconId,
        activeDir,
        setActiveDir,
        activeMode,
        setActiveMode,
        activeTheme,
        setActiveTheme,
        activeLayout,
        setActiveLayout,
        isCardShadow,
        setIsCardShadow,
        isLayout,
        setIsLayout,
        isBorderRadius,
        setIsBorderRadius,
        isCollapse,
        setIsCollapse,

      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

//Custom hook to consume the context
export const useSidebarContext = () => useContext(SidebarContext);


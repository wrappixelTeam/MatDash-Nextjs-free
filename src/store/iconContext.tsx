"use client";
import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, createContext, useContext, useState } from 'react';
export interface IconContextProps {
  selectedIconId: any;
  setSelectedIconId: (id: number) => void;
}
const IconContext = createContext<IconContextProps | undefined>(undefined);


export const IconProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedIconId, setSelectedIconId] = useState<any>(1);

  return (
    <IconContext.Provider value={{ selectedIconId, setSelectedIconId }}>
      {children}
    </IconContext.Provider>
  );
};

export default IconContext;

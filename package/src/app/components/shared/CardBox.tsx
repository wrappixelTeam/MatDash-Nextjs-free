"use client";
import { useSidebarContext } from "@/app/context/SidbarContext";
import { Card } from "flowbite-react";
import React from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?:string;
}
const CardBox: React.FC<MyAppProps> = ({ children,className }) => {
  const { activeMode, isCardShadow } = useSidebarContext();
  return(
    <Card className={`card ${className} ${isCardShadow ? 'dark:shadow-dark-md shadow-md' : 'shadow-none border border-ld'} `}>{children}</Card>
  );
  
};

export default CardBox;

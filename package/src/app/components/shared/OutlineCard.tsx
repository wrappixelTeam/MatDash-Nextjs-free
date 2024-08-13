"use client";
import { useSidebarContext } from "@/app/context/SidbarContext";
import { Card } from "flowbite-react";
import React from "react";


interface MyAppProps {
  children: React.ReactNode;
  className?:string;
}
const OutlineCard: React.FC<MyAppProps> = ({ children,className }) => {
  const { activeMode, isCardShadow } = useSidebarContext();
  return(
    <Card className={`card ${className} ${isCardShadow ? ' border border-ld' : ' border border-ld'} `}>{children}</Card>
  );
  
};

export default OutlineCard;

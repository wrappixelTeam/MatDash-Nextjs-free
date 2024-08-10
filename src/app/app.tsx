"use client";
import React from "react";
import "@/app/api/index";

interface MyAppProps {
  children: React.ReactNode;
}

const MyApp: React.FC<MyAppProps> = ({ children }) => {
  return <React.StrictMode>{children}</React.StrictMode>;
};

export default MyApp;

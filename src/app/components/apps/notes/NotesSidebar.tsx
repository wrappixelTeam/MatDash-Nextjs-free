"use client";
import { TextInput } from "flowbite-react";
import React from "react";
import Notelist from "./Notelist";

const NotesSidebar = () => {
  
  return (
    <>
      <div className="left-part">
        <Notelist/>
      </div>
    </>
  );
};

export default NotesSidebar;

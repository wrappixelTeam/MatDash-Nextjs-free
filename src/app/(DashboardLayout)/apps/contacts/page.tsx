"use client";
import CardBox from "@/app/components/shared/CardBox";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import { useState } from "react";
import ContactFilter from "@/app/components/apps/contacts/ContactFilter";
import ContactSearch from "@/app/components/apps/contacts/ContactSearch";
import { ContactContextProvider } from '@/app/context/Conatactcontext/index';
import ContactList from '@/app/components/apps/contacts/ContactList'
import ContactListItem from '@/app/components/apps/contacts/ContactListItem'

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Contact",
  },
];
const Contacts = () => {
  return (
    <>

      <ContactContextProvider>
        <BreadcrumbComp title="Contact App" items={BCrumb} />
        <CardBox className="p-0">
          <div className="flex">
            {/* ------------------------------------------- */}
            {/* Left Part */}
            {/* ------------------------------------------- */}
            <ContactFilter />

            {/* ------------------------------------------- */}
            {/* Middle part */}
            {/* ------------------------------------------- */}
            <div className="left-part">
              <ContactSearch />
              <ContactList />
            </div>
            <div>

              <ContactListItem />
            </div>

          </div>
        </CardBox>
      </ContactContextProvider>
    </>
  );
};

export default Contacts;









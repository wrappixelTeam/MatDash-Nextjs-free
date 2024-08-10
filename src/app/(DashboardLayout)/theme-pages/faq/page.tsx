import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import Questions from "@/app/components/theme-pages/faq/Questions";
import StillHaveQst from "@/app/components/theme-pages/faq/StillHaveQst";
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "FAQ",
  },
];

const faq = () => {
  return (
    <>
      <BreadcrumbComp title="FAQ" items={BCrumb} />
      <Questions />
      <StillHaveQst />
    </>
  );
};

export default faq;

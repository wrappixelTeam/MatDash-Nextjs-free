"use client";
import { useState } from "react";
import { Pagination, Card } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Pagination",
  },
];

const Paginations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  const [currentPages, setCurrentPages] = useState(1);
  const onPageChanges = (page: number) => setCurrentPages(page);

  const [currentsPage, setCurrentsPage] = useState(1);
  const onPagesChange = (page: number) => setCurrentsPage(page);

  const [flowPagin, setFlowPagin] = useState(1);
  const onFlowChange = (page: number) => setFlowPagin(page);

  const [labelPage, setLabelPage] = useState(1);
  const onLabelChange = (page: number) => setLabelPage(page);

  const [tablePage, setTablePage] = useState(1);
  const onTableChange = (page: number) => setTablePage(page);

  const [controltextPage, setControltextPage] = useState(1);
  const onControtextChange = (page: number) => setControltextPage(page);

  return (
    <>
      <BreadcrumbComp title="Pagination" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem] pb-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default Pagination</h4>
            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={100}
                onPageChange={onPageChange}
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Pagination with icons</h4>
            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination
                currentPage={currentPages}
                totalPages={100}
                onPageChange={onPageChanges}
                showIcons
              />
            </div>
          </CardBox>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[1.875rem] pb-[1.875rem]">
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">
              Pagination Previous and next
            </h4>
            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination
                layout="navigation"
                currentPage={flowPagin}
                totalPages={100}
                onPageChange={onFlowChange}
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">
              Pagination Control button icons
            </h4>
            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination
                layout="navigation"
                currentPage={currentsPage}
                totalPages={100}
                onPageChange={onPagesChange}
                showIcons
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">
              Pagination Table data navigation
            </h4>
            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination
                layout="table"
                currentPage={labelPage}
                totalPages={100}
                onPageChange={onLabelChange}
              />
            </div>
          </CardBox>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[1.875rem] pb-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">
              Pagination Table data navigation with icons
            </h4>
            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination
                layout="table"
                currentPage={tablePage}
                totalPages={100}
                onPageChange={onTableChange}
                showIcons
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">
              Pagination Control Button Text
            </h4>
            <div className="flex overflow-x-auto sm:justify-center">
              <Pagination
                layout="pagination"
                currentPage={controltextPage}
                totalPages={1000}
                onPageChange={onControtextChange}
                previousLabel="Go back"
                nextLabel="Go forward"
                showIcons
              />
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Paginations;

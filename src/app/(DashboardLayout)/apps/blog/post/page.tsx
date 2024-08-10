"use client"
import React from 'react';
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import BlogListing from '@/app/components/apps/blog/BlogListing';
import { BlogProvider } from '@/app/context/BlogContext/index';

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Blog app",
  },
];
const Blog = () => {
  return (
    <>
      <BlogProvider>
        <BreadcrumbComp title="Blog app" items={BCrumb} />
        <BlogListing />
      </BlogProvider>
    </>
  )
}
export default Blog

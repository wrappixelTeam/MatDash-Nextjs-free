import img1 from "/public/images/landingpage/demos/demo-main.jpg";
import img2 from "/public/images/landingpage/demos/demo-dark.jpg";
import img3 from "/public/images/landingpage/demos/demo-horizontal.jpg";
import img4 from "/public/images/landingpage/demos/demo-mini.jpg";
import img5 from "/public/images/landingpage/demos/demo-rtl.jpg";
import defaultdemo from "/public/images/landingpage/demos/demo-default.jpg";

import img6 from "/public/images/landingpage/apps/app-calendar.jpg";
import img7 from "/public/images/landingpage/apps/app-chat.jpg";
import img8 from "/public/images/landingpage/apps/app-contact.jpg";
import img9 from "/public/images/landingpage/apps/app-user-profile.jpg";
import img10 from "/public/images/landingpage/apps/app-note.jpg";
import img11 from "/public/images/landingpage/apps/app-blog.jpg";
import img12 from "/public/images/landingpage/apps/app-shop.jpg";
import img13 from "/public/images/landingpage/apps/app-productlist.jpg";
import img14 from "/public/images/landingpage/apps/app-checkout.jpg";
import img15 from "/public/images/landingpage/apps/app-blog-detail.jpg";
import img16 from "/public/images/landingpage/apps/app-product-detail.jpg";
import img17 from "/public/images/landingpage/apps/app-kanban.jpg";
import {
  Icon,
  IconAdjustments,
  IconArchive,
  IconArrowsShuffle,
  IconBook,
  IconBrandTailwind,
  IconBuildingCarousel,
  IconCalendar,
  IconChartPie,
  IconDatabase,
  IconDiamond,
  IconLanguageKatakana,
  IconLayersIntersect,
  IconLockAccess,
  IconMessage,
  IconRefresh,
  IconShieldLock,
  IconTag,
  IconWand,
} from "@tabler/icons-react";

interface DemoTypes {
  link: string;
  img: string | any;
  name: string;
  type: boolean;
}

const Demos: DemoTypes[] = [
  {
    type: true,
    img: img1,
    name: "Main",
    link: "",
  },
  {
    type: true,
    img: img2,
    name: "Dark",
    link: "",
  },
  {
    type: true,
    img: img3,
    name: "Horizontal",
    link: "",
  },
  {
    type: true,
    img: img4,
    name: "Minisidebar",
    link: "",
  },
  {
    type: true,
    img: img5,
    name: "RTL",
    link: "",
  },
  {
    type: true,
    img: defaultdemo,
    name: "Default Sidebar",
    link: "",
  },
  {
    type: false,
    img: img6,
    name: "Calandar App",
    link: "/apps/calendar",
  },
  {
    type: false,
    img: img7,
    name: "Chat App",
    link: "/apps/chats",
  },
  {
    type: false,
    img: img8,
    name: "Contact App",
    link: "/apps/contacts",
  },
  {
    type: false,
    img: img9,
    name: "User Profile App",
    link: "/apps/user/profile",
  },
  {
    type: false,
    img: img10,
    name: "Notes App",
    link: "/apps/notes",
  },
  {
    type: false,
    img: img11,
    name: "Blog App",
    link: "/apps/blog/posts",
  },
  {
    type: false,
    img: img15,
    name: "Blog Detail App",
    link: "/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones",
  },
  {
    type: false,
    img: img12,
    name: "eCommerce Shop App",
    link: "/ecommerce/products",
  },
  {
    type: false,
    img: img16,
    name: "eCommerce Product Detail App",
    link: "/ecommerce/product/detail/1",
  },
  {
    type: false,
    img: img13,
    name: "eCommerce Product List App",
    link: "/ecommerce/productlist",
  },
  {
    type: false,
    img: img14,
    name: "eCommerce Checkout App",
    link: "/ecommerce/checkout",
  },
  {
    type: false,
    img: img17,
    name: "Kanban App",
    link: "/apps/kanban",
  },
];

interface ListFeatureTypes {
  featureicon: any;
  bgcolor: string;
  title: string;
  subtitle: string;
}

const listFeature: ListFeatureTypes[] = [
  {
    featureicon: IconWand,
    title: "6 Theme Colors",
    subtitle:
      "We have included 6 pre-defined Theme Colors with MaterialM Admin.",
    bgcolor: "primary",
  },
  {
    featureicon: IconArchive,
    title: "65+ Page Templates",
    subtitle: "Yes, we have 6 demos & 65+ Pages per demo to make it easier.",
    bgcolor: "info",
  },
  {
    featureicon: IconAdjustments,
    title: "45+ UI Components",
    subtitle: "Almost 45+ UI Components being given with MaterialM Admin Pack.",
    bgcolor: "success",
  },
  {
    featureicon: IconBrandTailwind,
    title: "Tailwind",
    subtitle:
      "It is made with tailwind which is a powerful UI Component Framework.",
    bgcolor: "warning",
  },
  {
    featureicon: IconBuildingCarousel,
    title: "Flowbite React",
    subtitle:
      "UI component library for React applications,  a utility-first CSS framework.",
    bgcolor: "error",
  },
  {
    featureicon: IconDiamond,
    title: "3400+ Font Icons",
    subtitle:
      "Lots of Icon Fonts are included here in the package of MaterialM Admin.",
    bgcolor: "success",
  },
  {
    featureicon: IconShieldLock,
    title: "Firebase",
    subtitle:
      "provide powerful real-time database capabilities, authentication, and more.",
    bgcolor: "error",
  },
  {
    featureicon: IconDatabase,
    title: "Axios",
    subtitle:
      "Axios is a promise-based HTTP Client for node.js and the browser.",
    bgcolor: "secondary",
  },
  {
    featureicon: IconLanguageKatakana,
    title: "i18 React",
    subtitle:
      "react-i18 is a powerful internationalization framework for React.",
    bgcolor: "primary",
  },

  {
    featureicon: IconLockAccess,
    title: "Next-Auth",
    subtitle:
      "We have added Google, Github & Credential Provider with NextAuth",
    bgcolor: "primary",
  },
  {
    featureicon: IconChartPie,
    title: "Lots of Chart Options",
    subtitle:
      "Apexchart You name it and we have it, Yes lots of variations for Charts.",
    bgcolor: "success",
  },
  {
    featureicon: IconLayersIntersect,
    title: "Lots of Table Examples",
    subtitle: "Data Tables are initial requirement and we added them.",
    bgcolor: "warning",
  },
  {
    featureicon: IconRefresh,
    title: "Regular Updates",
    subtitle: "We are constantly updating our pack with new features.",
    bgcolor: "warning",
  },
  {
    featureicon: IconBook,
    title: "Detailed Documentation",
    subtitle: "We have made detailed documentation, so it will easy to use.",
    bgcolor: "secondary",
  },
  {
    featureicon: IconCalendar,
    title: "Calendar Design",
    subtitle: "Calendar is available with our package & in nice design.",
    bgcolor: "primary",
  },
  {
    featureicon: IconMessage,
    title: "Dedicated Support",
    subtitle: "We believe in supreme support is key and we offer that.",
    bgcolor: "error",
  },
];

/*User Review Section*/
import review1 from "/public/images/profile/user-2.jpg";
import review2 from "/public/images/profile/user-3.jpg";
import review3 from "/public/images/profile/user-4.jpg";

interface UserReviewTypes {
  img: any;
  review: string;
  title: string;
  subtitle: string;
}
const userReview: UserReviewTypes[] = [
  {
    img: review3,
    title: "Leslie Alexander",
    subtitle: "Product Designer, Appzio",
    review:
      "Such a beautiful, detailed, and extensive template. MaterialM admin is the perfect foundation for any project. I highly recommend this huge time saver.",
  },
  {
    img: review1,
    title: "Jenny Wilson",
    subtitle: "Features avaibility",
    review:
      "The dashboard template from wrappixel has helped me provide a cleanand sleek look to my dashboard and made it look exactly the way I wanted it to, mainly without having.",
  },
  {
    img: review2,
    title: "Minshan Cui",
    subtitle: "Features avaibility",
    review:
      "The quality of design is excellent, customizability and flexibility much better than the other products available in the market.I strongly recommend the wrappixel to other.",
  },
];


interface DemosMegaMenuTypes {
  img: any;
  name: string;
  link: string;
}


/*Demos Megamenu*/
const demosMegamenu: DemosMegaMenuTypes[] = [
  {
      img: img1,
      name: 'Main',
      link: ''
  },
  {
      img: img2,
      name: 'Dark',
      link: ''
  },
  {
      img: img3,
      name: 'Horizontal',
      link: ''
  },
  {
      img: img4,
      name: 'Minisidebar',
      link: ''
  },
  {
      img: img5,
      name: 'RTL',
      link: ''
  },

];
const appsMegamenu: DemosMegaMenuTypes[] = [
  {
      img: img6,
      name: 'Calandar App',
      link: '/apps/calendar'
  },
  {
      img: img7,
      name: 'Chat App',
      link: '/apps/chats'
  },
  {
      img: img8,
      name: 'Contact App',
      link: '/apps/contacts'
  },
  {
      img: img9,
      name: 'User Profile App',
      link: '/apps/user/profile'
  },
  {
      img: img10,
      name: 'Notes App',
      link: '/apps/notes'
  }
];

export { Demos, listFeature, userReview,demosMegamenu,appsMegamenu };

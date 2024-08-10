import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Footer",
  },
];

const Footers = () => {
  return (
    <>
      <BreadcrumbComp title="Footer" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default Footer</h4>
            <Footer container className="rounded-md">
              <Footer.Copyright href="#" by="MateriaIM" year={2024} />
              <Footer.LinkGroup>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </Footer>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Footer with logo</h4>
            <Footer container className="rounded-md">
              <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                  <FullLogo/>
                  <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="MateriaIM" year={2024} />
              </div>
            </Footer>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Social media icons</h4>
            <Footer container className="rounded-md">
              <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                  <div>
                  <FullLogo/>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                      <Footer.Title title="about" />
                      <Footer.LinkGroup col>
                        <Footer.Link href="#">Flowbite</Footer.Link>
                        <Footer.Link href="#">Tailwind CSS</Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                    <div>
                      <Footer.Title title="Follow us" />
                      <Footer.LinkGroup col>
                        <Footer.Link href="#">Github</Footer.Link>
                        <Footer.Link href="#">Discord</Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                    <div>
                      <Footer.Title title="Legal" />
                      <Footer.LinkGroup col>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">
                          Terms &amp; Conditions
                        </Footer.Link>
                      </Footer.LinkGroup>
                    </div>
                  </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                  <Footer.Copyright href="#" by="MateriaIM" year={2024} />
                  <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsGithub} />
                    <Footer.Icon href="#" icon={BsDribbble} />
                  </div>
                </div>
              </div>
            </Footer>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Sitemap links</h4>
            <Footer bgDark className="rounded-md">
              <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                  <div>
                    <Footer.Title title="Company" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">About</Footer.Link>
                      <Footer.Link href="#">Careers</Footer.Link>
                      <Footer.Link href="#">Brand Center</Footer.Link>
                      <Footer.Link href="#">Blog</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="help center" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">Discord Server</Footer.Link>
                      <Footer.Link href="#">Twitter</Footer.Link>
                      <Footer.Link href="#">Facebook</Footer.Link>
                      <Footer.Link href="#">Contact Us</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="legal" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">Privacy Policy</Footer.Link>
                      <Footer.Link href="#">Licensing</Footer.Link>
                      <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title="download" />
                    <Footer.LinkGroup col>
                      <Footer.Link href="#">iOS</Footer.Link>
                      <Footer.Link href="#">Android</Footer.Link>
                      <Footer.Link href="#">Windows</Footer.Link>
                      <Footer.Link href="#">MacOS</Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                  <Footer.Copyright href="#" by="MateriaIM" year={2024} />
                  <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsGithub} />
                    <Footer.Icon href="#" icon={BsDribbble} />
                  </div>
                </div>
              </div>
            </Footer>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Footers;

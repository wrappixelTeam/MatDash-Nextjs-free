"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Select,
  Radio,
  FileInput,
  ToggleSwitch,
  RangeSlider,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import TitleCard from "@/app/components/shared/TitleBorderCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Forms",
  },
];

const Forms = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);

  return (
    <>
      <BreadcrumbComp title="Forms" items={BCrumb} />
      <TitleCard title="demo">
        test
      </TitleCard>
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default form</h4>
            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" type="password" required />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="checkbox" id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </form>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Input sizing</h4>
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Small input" />
                </div>
                <TextInput id="small" type="text" sizing="sm" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="base" value="Base input" />
                </div>
                <TextInput id="base" type="text" sizing="md" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="large" value="Large input" />
                </div>
                <TextInput id="large" type="text" sizing="lg" />
              </div>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Disabled inputs</h4>
            <div className="flex max-w-md flex-col gap-4">
              <Label htmlFor="disabledInput1">API token</Label>
              <TextInput
                type="text"
                id="disabledInput1"
                placeholder="Disabled input"
                disabled
              />
              <Label htmlFor="disabledInput2">Personal access token</Label>
              <TextInput
                type="text"
                id="disabledInput2"
                placeholder="Disabled readonly input"
                disabled
                readOnly
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Inputs with shadow</h4>
            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your email" />
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Your password" />
                </div>
                <TextInput id="password2" type="password" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="repeat-password" value="Repeat password" />
                </div>
                <TextInput
                  id="repeat-password"
                  type="password"
                  required
                  shadow
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="agree" />
                <Label htmlFor="agree" className="flex">
                  I agree with the&nbsp;
                  <Link
                    href="#"
                    className="text-priamry hover:underline dark:text-primary"
                  >
                    terms and conditions
                  </Link>
                </Label>
              </div>
              <Button type="submit" color="primary">
                Register new account
              </Button>
            </form>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Input groups with icon</h4>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email4" value="Your email" />
              </div>
              <TextInput
                id="email4"
                type="email"
                icon={HiMail}
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email4" value="Your email" />
              </div>
              <TextInput
                id="email4"
                type="email"
                rightIcon={HiMail}
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email4" value="Your email" />
              </div>
              <TextInput
                id="email4"
                type="email"
                icon={HiMail}
                rightIcon={HiMail}
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="username3" value="Username" />
              </div>
              <TextInput
                id="username3"
                placeholder="Bonnie Green"
                addon="@"
                required
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Range slider</h4>
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="default-range" value="Default" />
                </div>
                <RangeSlider id="default-range" />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="disbaled-range" value="Disabled" />
                </div>
                <RangeSlider id="disabled-range" disabled />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="sm-range" value="Small" />
                </div>
                <RangeSlider id="sm-range" sizing="sm" />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="md-range" value="Medium" />
                </div>
                <RangeSlider id="md-range" sizing="md" />
              </div>
              <div>
                <div className="mb-1 block">
                  <Label htmlFor="lg-range" value="Large" />
                </div>
                <RangeSlider id="lg-range" sizing="lg" />
              </div>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Form validation</h4>
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="username3"
                    color="success"
                    value="Your name"
                  />
                </div>
                <TextInput
                  id="username"
                  placeholder="Bonnie Green"
                  required
                  color="success"
                  helperText={
                    <>
                      <span className="font-medium">Alright!</span> Username
                      available!
                    </>
                  }
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="username4"
                    color="failure"
                    value="Your name"
                  />
                </div>
                <TextInput
                  id="username4"
                  placeholder="Bonnie Green"
                  required
                  color="failure"
                  helperText={
                    <>
                      <span className="font-medium">Oops!</span> Username
                      already taken!
                    </>
                  }
                />
              </div>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Input element colors</h4>
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="input-gray" color="gray" value="Gray" />
                </div>
                <TextInput
                  id="input-gray"
                  placeholder="Input Gray"
                  required
                  color="gray"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="input-info" color="info" value="Info" />
                </div>
                <TextInput
                  id="input-info"
                  placeholder="Input Info"
                  required
                  color="info"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="input-success"
                    color="success"
                    value="Success"
                  />
                </div>
                <TextInput
                  id="input-success"
                  placeholder="Input Success"
                  required
                  color="success"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="input-failure"
                    color="failure"
                    value="Failure"
                  />
                </div>
                <TextInput
                  id="input-failure"
                  placeholder="Input Failure"
                  required
                  color="failure"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="input-warning"
                    color="warning"
                    value="Warning"
                  />
                </div>
                <TextInput
                  id="input-warning"
                  placeholder="Input Warning"
                  required
                  color="warning"
                />
              </div>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Textarea element</h4>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Toggle switch</h4>
            <div className="flex max-w-md flex-col items-start gap-4">
              <ToggleSwitch
                checked={switch1}
                label="Toggle me"
                onChange={setSwitch1}
              />
              <ToggleSwitch
                checked={switch2}
                label="Toggle me (checked)"
                onChange={setSwitch2}
              />
              <ToggleSwitch
                checked={false}
                disabled
                label="Toggle me (disabled)"
                onChange={() => undefined}
              />
              <ToggleSwitch
                checked={true}
                disabled
                label="Toggle me (disabled)"
                onChange={() => undefined}
              />
              <ToggleSwitch checked={switch3} onChange={setSwitch3} />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Checkbox</h4>
            <div className="flex max-w-md flex-col gap-4" id="checkbox">
              <div className="flex items-center gap-2">
                <Checkbox id="accept" defaultChecked />
                <Label htmlFor="accept" className="flex">
                  I agree with the&nbsp;
                  <a
                    href="#"
                    className="text-primary hover:underline dark:text-primary"
                  >
                    terms and conditions
                  </a>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                  I want to get promotional offers
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">I am 18 years or older</Label>
              </div>
              <div className="flex gap-2">
                <div className="flex h-5 items-center">
                  <Checkbox id="shipping" />
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="shipping">Free shipping via Flowbite</Label>
                  <div className="text-gray-500 dark:text-gray-300">
                    <span className="text-xs font-normal">
                      For orders shipped from Flowbite from{" "}
                      <span className="font-medium">€ 25</span> in books
                      or&nbsp;
                      <span>€ 29</span> on other categories
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" disabled>
                  Eligible for international shipping (disabled)
                </Label>
              </div>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12 flex items-stretch">
          <CardBox>
            <h4 className="text-lg font-semibold">Radio button</h4>
            <fieldset className="flex max-w-md flex-col gap-4">
              <legend className="mb-4">Choose your favorite country</legend>
              <div className="flex items-center gap-2">
                <Radio
                  id="united-state"
                  name="countries"
                  value="USA"
                  defaultChecked
                />
                <Label htmlFor="united-state">United States</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="germany" name="countries" value="Germany" />
                <Label htmlFor="germany">Germany</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="spain" name="countries" value="Spain" />
                <Label htmlFor="spain">Spain</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="uk" name="countries" value="United Kingdom" />
                <Label htmlFor="uk">United Kingdom</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="china" name="countries" value="China" disabled />
                <Label htmlFor="china" disabled>
                  China (disabled)
                </Label>
              </div>
            </fieldset>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">File upload</h4>
            <div id="fileUpload" className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload file" />
              </div>
              <FileInput
                id="file"
                helperText="A profile picture is useful to confirm your are logged into your account"
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12 flex items-stretch">
          <CardBox>
            <h4 className="text-lg font-semibold">Select input</h4>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select your country" />
              </div>
              <Select id="countries" required>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </Select>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Form helper text</h4>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email3" value="Your email" />
              </div>
              <TextInput
                id="email3"
                type="email"
                placeholder="name@flowbite.com"
                required
                helperText={
                  <>
                    We’ll never share your details. Read our
                    <a
                      href="#"
                      className="ml-1 font-medium text-primary hover:underline dark:text-primary"
                    >
                      Privacy Policy
                    </a>
                    .
                  </>
                }
              />
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Forms;

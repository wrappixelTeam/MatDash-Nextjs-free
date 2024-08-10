import TitleCard from "@/app/components/shared/TitleBorderCard";
import React from "react";
import {
  Label,
  TextInput,
  Checkbox,
  Button,
  Textarea,
  Radio,
  Select,
  Alert,
  Datepicker,
  HR,
} from "flowbite-react";
import { HiInformationCircle, HiMail } from "react-icons/hi";
import { IconLock, IconMail, IconTrash, IconUser } from "@tabler/icons-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Form Layout',
  },
];

const FormLayout = () => {
  return (
    <>
      <BreadcrumbComp title="Form Layout" items={BCrumb}/>
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="col-span-12">
          <TitleCard title="Ordrinary Form">
            <div className="grid grid-cols-4 gap-[1.875rem]">
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Email" />
                </div>
                <TextInput
                  id="email3"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                  className="form-control"
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
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Password" />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  className="form-control"
                  required
                />
              </div>
              <div className="flex items-center gap-2 col-span-12">
                <Checkbox className="checkbox" id="remember" />
                <Label htmlFor="remember">RememberMe!</Label>
              </div>
              <div className="col-span-12">
                <Button type="submit" color="primary" className="rounded-md">
                  Submit
                </Button>
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-12">
          <TitleCard title="Input Variants">
            <div className="grid grid-cols-12 gap-[1.875rem]">
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="input-gray" color="gray" value="Gray" />
                </div>
                <TextInput
                  id="input-gray"
                  placeholder="Input Gray"
                  className="form-rounded-md"
                  required
                  color="gray"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="input-info" color="info" value="Info" />
                </div>
                <TextInput
                  id="input-info"
                  placeholder="Input Info"
                  className="form-rounded-md"
                  required
                  color="info"
                />
              </div>
              <div className="col-span-12">
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
                  className="form-rounded-md"
                />
              </div>
              <div className="col-span-12">
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
                  className="form-rounded-md"
                />
              </div>
              <div className="col-span-12">
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
                  className="form-rounded-md"
                />
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-12">
          <TitleCard title="Default Form">
            <div className="grid grid-cols-6 gap-[1.875rem]">
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="Default Text" value="Default Text" />
                </div>
                <TextInput
                  id="default"
                  type="text"
                  placeholder="Marcal"
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@flowbite.com"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Password" />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea
                  id="comment"
                  placeholder="Leave a comment..."
                  required
                  className="form-control-textarera"
                  rows={4}
                />
              </div>
              <div className="flex items-center gap-[1.875rem] col-span-12">
                <div className="flex flex-col gap-[1rem]">
                  <div className="flex items-center gap-2">
                    <Checkbox id="promotion" />
                    <Label htmlFor="promotion">
                      I want to get promotional offers
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="promotion" />
                    <Label htmlFor="promotion">
                      I want to get promotional offers
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="promotion" />
                    <Label htmlFor="promotion">
                      I want to get promotional offers
                    </Label>
                  </div>
                </div>
                <div className="flex flex-col gap-[1rem]">
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
                    <Radio
                      id="united-state"
                      name="countries"
                      value="USA"
                      defaultChecked
                    />
                    <Label htmlFor="united-state">United States</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="united-state"
                      name="countries"
                      value="USA"
                      defaultChecked
                    />
                    <Label htmlFor="united-state">United States</Label>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="countries" value="Select" />
                </div>
                <Select id="countries" required className="select-md">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
                <div className="pt-5">
                  <Button type="submit" color="primary" className="rounded-md">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-12">
          <TitleCard title="Basic Header Form">
            <div className="pb-[1.875rem]">
              <Alert
                color="lightprimary"
                icon={HiInformationCircle}
                className="rounded-md"
              >
                <span className="font-medium">Person Info</span>
              </Alert>
            </div>
            <div className="grid grid-cols-12 gap-[1.875rem]">
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label htmlFor="base" value="First Name" />
                </div>
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label htmlFor="base" value="Last Name" />
                </div>
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label htmlFor="gender" value="Select Gender" />
                </div>
                <Select id="gender" required className="select-md">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>
              </div>
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label htmlFor="birth" value="Date of Birth" />
                </div>
                <Datepicker className="form-control" />
              </div>
              <div className="col-span-12">
                <Label htmlFor="membership" className="mb-3 inline-block">
                  Membership
                </Label>
                <div className="flex items-center gap-[1.875rem]">
                  <div className="flex items-center gap-2 pb-2">
                    <Radio
                      id="membership"
                      name="membership"
                      value="free"
                      defaultChecked
                    />
                    <Label htmlFor="united-state">Free</Label>
                  </div>
                  <div className="flex items-center gap-2 pb-2">
                    <Radio
                      id="paid"
                      name="membership"
                      value="paid"
                      defaultChecked
                    />
                    <Label htmlFor="united-state">Paid</Label>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <Alert
                  color="lightprimary"
                  icon={HiInformationCircle}
                  className="rounded-md"
                >
                  <span className="font-medium">Address</span>
                </Alert>
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="street" value="Street" />
                </div>
                <TextInput
                  id="street"
                  type="text"
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label htmlFor="city" value="City" />
                </div>
                <TextInput
                  id="city"
                  type="text"
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label htmlFor="state" value="State" />
                </div>
                <TextInput
                  id="state"
                  type="text"
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label htmlFor="postcode" value="Post Code" />
                </div>
                <TextInput
                  id="postcode"
                  type="text"
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label htmlFor="countr" value="Country" />
                </div>
                <Select id="countr" required className="select-md">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>
              <div className="col-span-12 flex items-center gap-[1rem]">
                <Button type="reset" color="error" className="rounded-md">
                  Cancel
                </Button>
                <Button type="submit" color="primary" className="rounded-md">
                  Submit
                </Button>
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-12">
          <TitleCard title="Readonly Form">
            <div className="grid grid-cols-4 gap-[1.875rem]">
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  value={"Wrappixel"}
                  sizing="md"
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="emailid" value="Email" />
                </div>
                <TextInput
                  id="emailid"
                  type="email"
                  value={"info@wrappixel.com"}
                  required
                  className="form-control"
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
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Password" />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  value={"info@wrappixel.com"}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-span-12">
                <Button type="submit" color="primary" className="rounded-md">
                  Submit
                </Button>
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-12">
          <TitleCard title="Disabled Form">
            <div className="grid grid-cols-4 gap-[1.875rem]">
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="disabledInput1" value="Name" />
                </div>
                <TextInput
                  id="disabledInput1"
                  type="text"
                  sizing="md"
                  className="form-control"
                  disabled
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="disabledInput1" value="Email" />
                </div>
                <TextInput
                  id="disabledInput1"
                  type="email"
                  required
                  className="form-control"
                  disabled
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
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="disabledInput1" value="Password" />
                </div>
                <TextInput
                  id="disabledInput1"
                  type="password"
                  className="form-control"
                  disabled
                />
              </div>
              <div className="col-span-12">
                <Button
                  type="submit"
                  color="primary"
                  className="rounded-md"
                  disabled
                >
                  Submit
                </Button>
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-6">
          <TitleCard title="Form with Left Icon">
            <div className="grid grid-cols-12 gap-[1.875rem]">
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="username3" value="Username" />
                </div>
                <TextInput
                  id="email4"
                  type="email"
                  icon={() => <IconUser size={20} />}
                  placeholder="name@flowbite.com"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="email4" value="Email" />
                </div>
                <TextInput
                  id="email4"
                  type="email"
                  icon={() => <IconMail size={20} />}
                  placeholder="name@flowbite.com"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  icon={() => <IconLock size={20} />}
                  placeholder="Password"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="confirmpassword" value="Confirm Password" />
                </div>
                <TextInput
                  id="confirmpassword"
                  type="password"
                  icon={() => <IconLock size={20} />}
                  placeholder="Confirm Password"
                  required
                  className="form-control"
                />
              </div>
              <div className="flex items-center gap-2 col-span-12">
                <Checkbox className="checkbox" id="remember" />
                <Label htmlFor="remember">RememberMe!</Label>
              </div>
              <div className="col-span-12 flex items-center gap-[1rem]">
                <Button type="reset" color="error" className="rounded-md">
                  Cancel
                </Button>
                <Button type="submit" color="primary" className="rounded-md">
                  Submit
                </Button>
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-6">
          <TitleCard title="Form with Right Icon">
            <div className="grid grid-cols-6 gap-[1.875rem]">
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="username3" value="Username" />
                </div>
                <TextInput
                  id="email4"
                  type="email"
                  rightIcon={() => <IconUser size={20} />}
                  placeholder="name@flowbite.com"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="email4" value="Email" />
                </div>
                <TextInput
                  id="email4"
                  type="email"
                  rightIcon={() => <IconMail size={20} />}
                  placeholder="name@flowbite.com"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  rightIcon={() => <IconLock size={20} />}
                  placeholder="Password"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="confirmpassword" value="Confirm Password" />
                </div>
                <TextInput
                  id="confirmpassword"
                  type="password"
                  rightIcon={() => <IconLock size={20} />}
                  placeholder="Confirm Password"
                  required
                  className="form-control"
                />
              </div>
              <div className="flex items-center gap-2 col-span-12">
                <Checkbox className="checkbox" id="remember" />
                <Label htmlFor="remember">RememberMe!</Label>
              </div>
              <div className="col-span-12 flex items-center gap-[1rem]">
                <Button type="reset" color="error" className="rounded-md">
                  Cancel
                </Button>
                <Button type="submit" color="primary" className="rounded-md">
                  Submit
                </Button>
              </div>
            </div>
          </TitleCard>
        </div>
      </div>
    </>
  );
};

export default FormLayout;

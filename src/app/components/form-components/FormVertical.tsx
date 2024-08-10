"use client";
import React from "react";

import TitleCard from "@/app/components/shared/TitleBorderCard";
import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Select,
  TextInput,
  Textarea,
  Accordion,
  Radio,
  Tabs,
} from "flowbite-react";
import {
  IconBuildingArch,
  IconMail,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Form Vertical",
  },
];

const FormVertical = () => {
  return (
    <>
      <BreadcrumbComp title="Accordion" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="col-span-6">
          <TitleCard title="Basic Layout">
            <div className="grid grid-cols-12 gap-[1.875rem]">
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput
                  id="name"
                  type="name"
                  placeholder="Jordan Powell"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="company" value="Company" />
                </div>
                <TextInput
                  id="company"
                  type="text"
                  placeholder="ACME Inc."
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="jordan.powell@example.com"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="phoneno" value="Phone No" />
                </div>
                <TextInput
                  id="phoneno"
                  type="number"
                  placeholder="125 7545 645"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Message" />
                </div>
                <Textarea
                  id="message"
                  placeholder="Hi, Do you  have a moment to talk Jeo ?"
                  required
                  className="form-control-textarera"
                  rows={4}
                />
              </div>
              <div className="col-span-12">
                <Button type="submit" color="primary" className="rounded-md">
                  Send
                </Button>
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-6">
          <TitleCard title="Basic with Icons">
            <div className="grid grid-cols-12 gap-[1.875rem]">
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput
                  id="name"
                  type="name"
                  icon={() => <IconUser size={20} />}
                  placeholder="Jordan Powell"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="company" value="Company" />
                </div>
                <TextInput
                  id="company"
                  type="text"
                  icon={() => <IconBuildingArch size={20} />}
                  placeholder="ACME Inc."
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  icon={() => <IconMail size={20} />}
                  placeholder="jordan.powell@example.com"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="phoneno" value="Phone No" />
                </div>
                <TextInput
                  id="phoneno"
                  type="number"
                  icon={() => <IconPhone size={20} />}
                  placeholder="125 7545 645"
                  required
                  className="form-control"
                />
              </div>
              <div className="col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Message" />
                </div>
                <Textarea
                  id="message"
                  placeholder="Hi, Do you  have a moment to talk Jeo ?"
                  required
                  className="form-control-textarera"
                  rows={4}
                />
              </div>
              <div className="col-span-12">
                <Button type="submit" color="primary" className="rounded-md">
                  Send
                </Button>
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-12">
          <TitleCard title="Multi Column with Form Separator">
            <div className="col-span-12 pb-[1.875rem]">
              <h6 className="text-lg">Account Details</h6>
            </div>
            <div className="grid grid-cols-2 gap-[1.875rem] pb-[1.875rem]">
              <div className="col-span-1">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="username" value="Username" />
                </div>
                <div className="col-span-9">
                  <TextInput
                    id="username"
                    type="text"
                    placeholder="John Deo"
                    sizing="md"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="email" value="Email" />
                </div>
                <div className="col-span-9">
                  <TextInput
                    id="email"
                    type="text"
                    placeholder="john.deo@example.com"
                    sizing="md"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="password" value="Password" />
                </div>
                <div className="col-span-9">
                  <TextInput
                    id="password"
                    type="password"
                    placeholder="john.deo"
                    sizing="md"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="confirmpassword" value="Confirm Password" />
                </div>
                <div className="col-span-9">
                  <TextInput
                    id="confirmpassword"
                    type="password"
                    placeholder="john.deo"
                    sizing="md"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 pb-[1.875rem] border-t border-border pt-5 dark:border-darkborder">
              <h6 className="text-lg">Personal Info</h6>
            </div>
            <div className="grid grid-cols-12 gap-[1.875rem]">
              <div className="col-span-6">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="firstname" value="First Name" />
                </div>
                <div className="col-span-9">
                  <TextInput
                    id="firstname"
                    type="text"
                    placeholder="Jordan"
                    sizing="md"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="lastname" value="Last Name" />
                </div>
                <div className="col-span-9">
                  <TextInput
                    id="lastname"
                    type="text"
                    placeholder="Powell"
                    sizing="md"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="country" value="Country" />
                </div>
                <div className="col-span-6">
                  <Select id="gender" required className="select-md">
                    <option>India</option>
                    <option>Europe</option>
                    <option>Franch</option>
                  </Select>
                </div>
              </div>
              <div className="col-span-6">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="languange" value="Language" />
                </div>
                <div className="col-span-6">
                  <Select id="gender" required className="select-md">
                    <option>English</option>
                    <option>Spenish</option>
                    <option>Chinese</option>
                  </Select>
                </div>
              </div>
              <div className="col-span-6">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="birthdate" value="Birth Date" />
                </div>
                <div className="col-span-9">
                  <Datepicker className="form-control" />
                </div>
              </div>
              <div className="col-span-6">
                <div className="col-span-3 mb-2">
                  <Label htmlFor="phone" value="Phone No" />
                </div>
                <div className="col-span-9">
                  <TextInput
                    id="phone"
                    type="text"
                    placeholder="124 456 741"
                    sizing="md"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-3"></div>
                <div className="col-span-9 flex items-center gap-[1rem]">
                  <Button type="submit" color="primary" className="rounded-md">
                    Submit
                  </Button>
                  <Button type="reset" color="error" className="rounded-md">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </TitleCard>
        </div>
        <div className="col-span-12">
          <h5 className="text-lg font-semibold py-6">Collapsible Section</h5>
          <div>
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="text-lg font-semibold">
                  Delivery Address
                </Accordion.Title>
                <Accordion.Content>
                  <div className="grid grid-cols-12 gap-[1.875rem]">
                    <div className="col-span-6">
                      <div className="col-span-3 mb-2">
                        <Label htmlFor="fullname" value="Full Name" />
                      </div>
                      <div className="col-span-9">
                        <TextInput
                          id="fullname"
                          type="text"
                          placeholder="John Deo"
                          sizing="md"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="col-span-3 mb-2">
                        <Label htmlFor="phone" value="Phone No" />
                      </div>
                      <div className="col-span-9">
                        <TextInput
                          id="phone"
                          type="text"
                          placeholder="425 7545 6321"
                          sizing="md"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="col-span-3 mb-2">
                        <Label htmlFor="address" value="Address" />
                      </div>
                      <div className="col-span-9">
                        <Textarea
                          id="address"
                          placeholder="150, Ring Road"
                          required
                          className="form-control-textarera"
                          rows={3}
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="col-span-3 mb-2">
                        <Label htmlFor="pincode" value="Pincode" />
                      </div>
                      <div className="col-span-9">
                        <TextInput
                          id="pincode"
                          type="text"
                          placeholder="687541"
                          sizing="md"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="col-span-3 mb-2">
                        <Label htmlFor="landmark" value="Landmark" />
                      </div>
                      <div className="col-span-9">
                        <TextInput
                          id="landmark"
                          type="text"
                          placeholder="Nr. Wall Street"
                          sizing="md"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="col-span-3 mb-2">
                        <Label htmlFor="city" value="City" />
                      </div>
                      <div className="col-span-9">
                        <TextInput
                          id="city"
                          type="text"
                          placeholder="Jackson"
                          sizing="md"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="col-span-3 mb-2">
                        <Label htmlFor="state" value="State" />
                      </div>
                      <div className="col-span-6">
                        <Select id="gender" required className="select-md">
                          <option>Dubai</option>
                          <option>Polend</option>
                          <option>Bangladesh</option>
                        </Select>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="mb-2">
                        <Label htmlFor="addresstype" value="Address Type" />
                      </div>
                      <div className="flex items-center gap-[1.875rem]">
                        <div className="flex items-center gap-2">
                          <Radio
                            id="membership"
                            name="membership"
                            value="free"
                            defaultChecked
                          />
                          <Label htmlFor="united-state">
                            Home (All day delivery)
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Radio
                            id="paid"
                            name="membership"
                            value="paid"
                            defaultChecked
                          />
                          <Label htmlFor="united-state">
                            {" "}
                            Office (Delivery between 10 AM - 5 PM)
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="text-lg font-semibold">
                  Delivery Options
                </Accordion.Title>
                <Accordion.Content>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <Radio
                        id="delivery"
                        name="parcel"
                        value="standard"
                        defaultChecked
                      />
                      <Label htmlFor="standard">Standard 3-5 Days</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="delivery"
                        name="parcel"
                        value="express"
                        defaultChecked
                      />
                      <Label htmlFor="express">Express</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="delivery"
                        name="parcel"
                        value="overnight"
                        defaultChecked
                      />
                      <Label htmlFor="overnight">Overnight</Label>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="text-lg font-semibold">
                  Payment Method
                </Accordion.Title>
                <Accordion.Content>
                  <div className="flex items-center gap-5 py-[1.875rem]">
                    <div className="flex items-center gap-2">
                      <Radio
                        id="cardpayment"
                        name="payment"
                        value="Credit/Debit/ATM Card"
                        defaultChecked
                      />
                      <Label htmlFor="payment">Credit/Debit/ATM Card</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="cardpayment"
                        name="payment"
                        value="cashondeliver"
                        defaultChecked
                      />
                      <Label htmlFor="payment"> Cash on Delivery</Label>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-[1.875rem]">
                    <div className="col-span-7">
                      <div className="col-span-3 mb-2">
                        <Label htmlFor="cardnumber" value="Card Number" />
                      </div>
                      <div className="col-span-9">
                        <TextInput
                          id="cardnumber"
                          type="number"
                          placeholder="1250 4521 5630 2390"
                          sizing="md"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-span-7 grid grid-cols-9 gap-[1.875rem]">
                      <div className="col-span-5">
                        <div className="mb-2">
                          <Label htmlFor="name" value="Name" />
                        </div>
                        <div className="">
                          <TextInput
                            id="name"
                            type="text"
                            placeholder="Name"
                            sizing="md"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-2">
                          <Label htmlFor="expiredate" value="Exp.Date" />
                        </div>
                        <div className="">
                          <TextInput
                            id="expiredate"
                            type="number"
                            placeholder="MM/YY"
                            sizing="md"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-2">
                          <Label htmlFor="cvvnumber" value="CVV Code" />
                        </div>
                        <div className="">
                          <TextInput
                            id="cvvnumber"
                            type="number"
                            placeholder="528"
                            sizing="md"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 flex items-center gap-4">
                      <Button
                        type="submit"
                        color="primary"
                        className="rounded-md"
                      >
                        Submit
                      </Button>
                      <Button type="reset" color="error" className="rounded-md">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
        <div className="col-span-12 overflow-x-auto">
        <h5 className="text-lg font-semibold py-6">Form with Tabs</h5>
          <Tabs aria-label="Full width tabs" className="gap-[1.25rem]">
            <Tabs.Item active title="Personal Info">
              <div className="grid grid-cols-12 gap-[1.875rem]">
                <div className="col-span-6 flex flex-col gap-[1.875rem]">
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="firstname" value="First Name" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="firstname"
                        type="text"
                        placeholder="John"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="country" value="Country" />
                    </div>
                    <div className="col-span-9">
                      <Select id="gender" required className="select-md">
                        <option>India</option>
                        <option>Europe</option>
                        <option>Franch</option>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="birthdate" value="Birth Date" />
                    </div>
                    <div className="col-span-9">
                      <Datepicker className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 flex flex-col gap-[1.875rem]">
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="lastname" value="Last Name" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="lastname"
                        type="text"
                        placeholder="Deo"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="language" value="Language" />
                    </div>
                    <div className="col-span-9">
                      <Select id="gender" required className="select-md">
                        <option>English</option>
                        <option>Franch</option>
                        <option>Spanish</option>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="phone" value="Phone No" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="phone"
                        type="text"
                        placeholder="958 1475 458"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 mt-[1.875rem]">
                <Button type="submit" color="primary" className="rounded-md">
                  Submit
                </Button>
                <Button type="reset" color="error" className="rounded-md">
                  Cancel
                </Button>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Account Details">
              <div className="grid grid-cols-12 gap-[1.875rem]">
                <div className="col-span-6 flex flex-col gap-[1.875rem]">
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="username" value="Username" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="username"
                        type="text"
                        placeholder="John.Deo"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="password" value="Password" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="password"
                        type="text"
                        placeholder="john.deo"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 flex flex-col gap-[1.875rem]">
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="email" value="Email" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="email"
                        type="text"
                        placeholder="john.deo@example.com"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="confirm" value="Confirm" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="confirm"
                        type="text"
                        placeholder="john.deo"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 mt-[1.875rem]">
                <Button type="submit" color="primary" className="rounded-md">
                  Submit
                </Button>
                <Button type="reset" color="error" className="rounded-md">
                  Cancel
                </Button>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Social Links">
              <div className="grid grid-cols-12 gap-[1.875rem]">
                <div className="col-span-6 flex flex-col gap-[1.875rem]">
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="twitter" value="Twitter" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="twitter"
                        type="text"
                        placeholder="https://twitter.com/abc"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="google" value="Google" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="google"
                        type="text"
                        placeholder="https://plus.google.com/abc"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="instagram" value="Instagram" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="instagram"
                        type="text"
                        placeholder="https://instagram.com/abc"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 flex flex-col gap-[1.875rem]">
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="facebook" value="Facebook" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="facebook"
                        type="text"
                        placeholder="https://facebook.com/abc"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="linkedin" value="Linkedin" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="linkedin"
                        type="text"
                        placeholder="https://linkedin.com/abc"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-7 items-center">
                    <div className="col-span-3">
                      <Label htmlFor="quora" value="Quora" />
                    </div>
                    <div className="col-span-9">
                      <TextInput
                        id="quora"
                        type="text"
                        placeholder="https://quora.com/abc"
                        sizing="md"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5 mt-[1.875rem]">
                <Button type="submit" color="primary" className="rounded-md">
                  Submit
                </Button>
                <Button type="reset" color="error" className="rounded-md">
                  Cancel
                </Button>
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default FormVertical;

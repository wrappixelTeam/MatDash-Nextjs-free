"use client";
import React from "react";
import {
  Card,
  Modal,
  Button,
  Checkbox,
  Label,
  TextInput,
  Select,
} from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const PopupModals = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [popupModal, setPopupModal] = useState(false);
  const [email, setEmail] = useState("");

  const [sizeModal, setSizeModal] = useState(false);
  const [modalSize, setModalSize] = useState<string>("md");

  const [placeModal, setPlaceModal] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("center");

  const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Modals",
    },
  ];

  function onCloseModal() {
    setFormModal(false);
    setEmail("");
  }
  return (
    <>
      <BreadcrumbComp title="Modals" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Defult Modal</h4>
            <div>
              <Button
                onClick={() => setOpenModal(true)}
                className="w-fit bg-primary rounded-md"
              >
                Defult Modal
              </Button>
              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="rounded-t-md">
                  Terms of Service
                </Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={() => setOpenModal(false)}
                    className="rounded-md bg-primary"
                  >
                    I accept
                  </Button>
                  <Button
                    color="gray"
                    onClick={() => setOpenModal(false)}
                    className="rounded-md"
                  >
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Pop-up Modal</h4>
            <div>
              <Button
                onClick={() => setPopupModal(true)}
                className="w-fit bg-primary rounded-md"
              >
                Pop-up modal
              </Button>
              <Modal
                show={popupModal}
                size="md"
                onClose={() => setPopupModal(false)}
                popup
                className="rounded-t-md"
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this product?
                    </h3>
                    <div className="flex justify-center gap-4">
                      <Button
                        color="failure"
                        onClick={() => setPopupModal(false)}
                        className="rounded-md"
                      >
                        {"Yes, I'm sure"}
                      </Button>
                      <Button
                        color="gray"
                        onClick={() => setPopupModal(false)}
                        className="rounded-md"
                      >
                        No, cancel
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Modal with form elements</h4>
            <div>
              <Button
                onClick={() => setFormModal(true)}
                className="w-fit bg-primary rounded-md"
              >
                Modal with form elements
              </Button>
              <Modal show={formModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Sign in to our platform
                    </h3>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                      </div>
                      <TextInput
                        id="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                      </div>
                      <TextInput id="password" type="password" required />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                      >
                        Lost Password?
                      </a>
                    </div>
                    <div className="w-full">
                      <Button className="rounded-md bg-primary">
                        Log in to your account
                      </Button>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered?&nbsp;
                      <a
                        href="#"
                        className="text-cyan-700 hover:underline dark:text-cyan-500"
                      >
                        Create account
                      </a>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </CardBox>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-[1.875rem] mt-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <div>
              <h4 className="text-lg font-semibold pb-3">Sizing options</h4>
              <div className="flex flex-wrap gap-4">
                <div className="w-40">
                  <Select
                    defaultValue="md"
                    onChange={(event) => setModalSize(event.target.value)}
                  >
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                    <option value="xl">xl</option>
                    <option value="2xl">2xl</option>
                    <option value="3xl">3xl</option>
                    <option value="4xl">4xl</option>
                    <option value="5xl">5xl</option>
                    <option value="6xl">6xl</option>
                    <option value="7xl">7xl</option>
                  </Select>
                </div>
                <Button
                  onClick={() => setSizeModal(true)}
                  className="w-fit bg-primary rounded-md"
                >
                  Toggle modal
                </Button>
              </div>
              <Modal
                show={sizeModal}
                size={modalSize}
                onClose={() => setSizeModal(false)}
              >
                <Modal.Header>Small modal</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6 p-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={() => setSizeModal(false)}
                    className="bg-primary rounded-md"
                  >
                    I accept
                  </Button>
                  <Button
                    color="gray"
                    onClick={() => setSizeModal(false)}
                    className="rounded-md"
                  >
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Placement options</h4>
            <div>
              <div className="flex flex-wrap gap-4">
                <div className="w-40">
                  <Select
                    defaultValue="center"
                    onChange={(event) => setModalPlacement(event.target.value)}
                  >
                    <option value="center">Center</option>
                    <option value="top-left">Top left</option>
                    <option value="top-center">Top center</option>
                    <option value="top-right">Top right</option>
                    <option value="center-left">Center left</option>
                    <option value="center-right">Center right</option>
                    <option value="bottom-right">Bottom right</option>
                    <option value="bottom-center">Bottom center</option>
                    <option value="bottom-left">Bottom left</option>
                  </Select>
                </div>
                <Button
                  onClick={() => setPlaceModal(true)}
                  className="w-fit bg-primary rounded-md"
                >
                  Toggle modal
                </Button>
              </div>
              <Modal
                show={placeModal}
                position={modalPlacement}
                onClose={() => setPlaceModal(false)}
              >
                <Modal.Header>Small modal</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6 p-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={() => setPlaceModal(false)}
                    className="bg-primary rounded-md"
                  >
                    I accept
                  </Button>
                  <Button
                    color="gray"
                    onClick={() => setPlaceModal(false)}
                    className="rounded-md"
                  >
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default PopupModals;

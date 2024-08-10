'use client'
import React, { useState, useEffect, ChangeEvent, useContext } from 'react';
import {
  Button,
  Avatar,
  HR,
  Select,
  TextInput,
  Label,
  Modal, Alert
} from 'flowbite-react';
import { IconPencil, IconTrash, IconDeviceFloppy, IconStar, IconStarFilled, IconAlertOctagon } from '@tabler/icons-react';
import { ContactContext } from '@/app/context/Conatactcontext/index';
import { ContactType } from '@/app/(DashboardLayout)/types/apps/contact';
import Image from 'next/image';



const ContactListItem: React.FC = () => {
  const { selectedContact, deleteContact, updateContact, starredContacts, toggleStarred, openModal, setOpenModal }: any = useContext(ContactContext);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactType | null>(null);
  const [showAlert, setShowAlert] = useState(false); // State for showing alert



  useEffect(() => {
    setFormData(selectedContact);
  }, [selectedContact]);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSaveClick = () => {
    if (formData) {
      updateContact(formData);
    }
    setIsEditMode(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData((prevData) => ({
        ...(prevData as ContactType),
        [name]: value,
      }));
    }
  };

  const handleDeleteClick = () => {
    if (selectedContact) {
      deleteContact(selectedContact.id);
      setOpenModal(true);
    }
  };

  const handleDepartmentChange = (event: any) => {
    const departmentValue = event.target.value as string;
    if (formData) {
      setFormData((prevData) => ({
        ...(prevData as ContactType),
        department: departmentValue,
      }));
    }
  };

  if (!selectedContact) {
    return (
      <div>
        <div>
          <h4>Please Select a Contact</h4>
          <br />
          <Image src='/images/breadcrumb/emailSv.png' alt="Email Icon" width="250" height="250" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <h5>Contact Details</h5>
        <div className="ml-auto flex gap-0">
          <div onClick={() => toggleStarred(selectedContact.id)}>
            {starredContacts.includes(selectedContact.id) ? (
              <IconStarFilled className="text-yellow-500 w-18 h-18" />
            ) : (
              <IconStar className="w-18 h-18" />
            )}
          </div>
          <div onClick={isEditMode ? handleSaveClick : handleEditClick}>
            {isEditMode ? (
              <IconDeviceFloppy size="18" stroke={1.3} />
            ) : (
              <IconPencil size="18" stroke={1.3} />
            )}
          </div>
          <div onClick={handleDeleteClick}>
            <IconTrash size="18" stroke={1.3} />
          </div>
        </div>
      </div>
      <HR />
      <div className="overflow-auto">
        {isEditMode && formData ? (
          <div className="pt-1">
            {[
              { id: 1, title: 'First Name', value: formData.firstname, name: 'firstname' },
              { id: 2, title: 'Last Name', value: formData.lastname, name: 'lastname' },
              { id: 3, title: 'Company', value: formData.company, name: 'company' },
              { id: 4, title: 'Department', value: formData.department, name: 'department' },
              { id: 5, title: 'Email', value: formData.email, name: 'email' },
              { id: 6, title: 'Phone', value: formData.phone, name: 'phone' },
              { id: 7, title: 'Address', value: formData.address, name: 'address' },
              { id: 8, title: 'Notes', value: formData.notes, name: 'notes' },
            ].map((data) => (
              <div key={data.id} className="px-3 py-1.5">
                <p className="text-subtitle1 font-semibold mb-0.5">{data.title}</p>
                {data.name !== 'department' && (
                  <TextInput

                    type="text"
                    name={data.name}
                    value={data.value}
                    onChange={handleInputChange}
                  />
                )}
                {data.name === 'department' && (
                  <div className="max-w-md">
                    <div className="mb-2 block">
                      <Label htmlFor="department" />
                    </div>
                    <Select id="countries" value={formData.department} onChange={handleDepartmentChange} required>
                      <option>Sales</option>
                      <option>Engineering</option>
                      <option>HR</option>
                    </Select>
                  </div>
                )}
              </div>
            ))}
            <div className="p-3">
              <Button color="primary" onClick={handleSaveClick}>
                Save Contact
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="p-3">
              <div className="flex items-center">
                <Avatar
                  alt={`${selectedContact.firstname} ${selectedContact.lastname}`}
                  img={selectedContact.image}
                  className="w-72 h-72 rounded-full"
                />
                <div className="ml-2">
                  <p className="text-h6 mb-0.5">
                    {selectedContact.firstname} {selectedContact.lastname}
                  </p>
                  <p className="text-body2 text-secondary mb-0.5">{selectedContact.department}</p>
                  <p className="text-body2 text-secondary">{selectedContact.company}</p>
                </div>
              </div>
              <div >
                <div >
                  <p className="text-body2 text-secondary">Phone Number</p>
                  <p className="text-subtitle1 font-semibold mb-0.5">{selectedContact.phone}</p>
                </div>
                <div>
                  <p className="text-body2 text-secondary">Email address</p>
                  <p className="text-subtitle1 font-semibold mb-0.5">{selectedContact.email}</p>
                </div>
                <div>
                  <p className="text-body2 text-secondary">Address</p>
                  <p className="text-subtitle1 font-semibold mb-0.5">{selectedContact.address}</p>
                </div>
                <div >
                  <p className="text-body2 text-secondary">Department</p>
                  <p className="text-subtitle1 font-semibold mb-0.5">{selectedContact.department}</p>
                </div>
                <div >
                  <p className="text-body2 text-secondary">Company</p>
                  <p className="text-subtitle1 font-semibold mb-0.5">{selectedContact.company}</p>
                </div>
                <div >
                  <p className="text-body2 text-secondary mb-1">Notes</p>
                  <p className="text-subtitle1 mb-0.5">{selectedContact.notes}</p>
                </div>
              </div>
            </div>
            <HR />
            <div className="p-3 gap-1 flex">
              <Button
                color="primary"

                size="small"
                onClick={handleEditClick}
              >
                Edit
              </Button>
              <Button
                color="error"
                size="small"
                onClick={handleDeleteClick}
              >
                Delete
              </Button>
            </div>
          </div>
        )}
      </div>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <IconAlertOctagon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this contact?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {showAlert && (
        <Alert color='warning' rounded className='fixed top-3 '>
          Contact updated successfully.
        </Alert>
      )}

    </>
  );
};

export default ContactListItem;


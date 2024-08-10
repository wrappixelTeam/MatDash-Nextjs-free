'use client'
import React, { useContext, useState } from 'react';
import profilepic from '../../../../../public/images/profile/user-5.jpg';
import { ContactContext } from '@/app/context/Conatactcontext/index';
import { Modal, Button, TextInput, Label, Select, Textarea, Alert } from 'flowbite-react'
import { IconX } from '@tabler/icons-react'

const ContactAdd = () => {
  const { addContact } = useContext(ContactContext);
  const [show, setShow] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState(false); // State for showing alert

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    image: profilepic,
    company: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
    department: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name!]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addContact(formData);
    setShowAlert(true); // Show alert after adding contact
    handleClose();

    // Hide alert after some time (e.g., 5 seconds)
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>

      <Button className='w-full' color={'primary'} onClick={handleShow}>Add New Contact</Button>
      <Modal show={show} onClose={handleClose} >

        <Modal.Header>
          <div>
            <h5 >
              Add New Contact
            </h5>
            <div onClick={handleClose}>
              <IconX />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p id="alert-dialog-description">
            Let's add a new contact for your application. Fill in all fields and click the submit button.
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <Label htmlFor="firstname" value="firstname" />

                  <TextInput
                    name="firstname"
                    type="text"
                    onChange={handleChange}
                    value={formData.firstname}
                    required
                  />
                </div>
                <div >
                  <Label htmlFor="lastname" value="lastname" />
                  <TextInput
                    name="lastname"
                    type="text"
                    onChange={handleChange}
                    value={formData.lastname}
                    required
                  />
                </div>
                <div >
                  <div className="max-w-md">
                    <div className="mb-2 block">
                      <Label htmlFor="Department" value="Select department" />
                    </div>
                    <Select id="Department" name="department" onChange={handleChange} value={formData.department}>
                      <option value="Engineering">Engineering</option>
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="company" value="company" />
                  <TextInput
                    name="company"
                    type="text"
                    onChange={handleChange}
                    value={formData.company}
                  />
                </div>
                <div >
                  <Label htmlFor="phone" value="phone" />
                  <TextInput
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                <div>
                  <Label htmlFor="email" value="email" />
                  <TextInput
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address" value="address" />
                  <Textarea id="address" name="address" placeholder="address..." required rows={4} onChange={handleChange}
                    value={formData.address} />
                </div>
                <div>
                  <Label htmlFor="notes" value="notes" />
                  <Textarea id="notes" name="notes" placeholder="note..." required rows={4} onChange={handleChange}
                    value={formData.notes} />
                </div>
                <Modal.Footer>
                  <div >
                    <Button color="primary" type="submit" >
                      Submit
                    </Button>
                    <Button color="error" onClick={handleClose}>
                      Cancel
                    </Button>
                  </div>
                </Modal.Footer>
              </div>
            </form>
          </div>
        </Modal.Body >
      </Modal>
      {showAlert && (
        <Alert color='warning' rounded className='fixed top-3 '>
          Contact added successfully.
        </Alert>
      )}
    </>
  );
};
export default ContactAdd;

import React, { useState } from "react";
import { UserModalProps, UserData } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const keys = name.split(".");
    const newFormData: any = { ...formData };

    let current = newFormData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;

    setFormData(newFormData);
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>

        <div className="grid grid-cols-2 gap-4">
          <input name="name" onChange={handleChange} value={formData.name} className="border p-2 rounded" placeholder="Name" />
          <input name="username" onChange={handleChange} value={formData.username} className="border p-2 rounded" placeholder="Username" />
          <input name="email" onChange={handleChange} value={formData.email} className="border p-2 rounded" placeholder="Email" />
          <input name="phone" onChange={handleChange} value={formData.phone} className="border p-2 rounded" placeholder="Phone" />
          <input name="website" onChange={handleChange} value={formData.website} className="border p-2 rounded" placeholder="Website" />
          <input name="company.name" onChange={handleChange} value={formData.company.name} className="border p-2 rounded" placeholder="Company Name" />
          <input name="company.catchPhrase" onChange={handleChange} value={formData.company.catchPhrase} className="border p-2 rounded" placeholder="Catch Phrase" />
          <input name="company.bs" onChange={handleChange} value={formData.company.bs} className="border p-2 rounded" placeholder="BS" />
          <input name="address.street" onChange={handleChange} value={formData.address.street} className="border p-2 rounded" placeholder="Street" />
          <input name="address.city" onChange={handleChange} value={formData.address.city} className="border p-2 rounded" placeholder="City" />
        </div>

        <div className="flex justify-end mt-6 space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

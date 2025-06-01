import React from "react";
import { UserProps } from "../../interfaces";

type Props = {
  user: UserProps;
};

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-blue-600">{user.email}</p>
      <div className="mt-2 text-sm text-gray-700">
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><em>{user.company.catchPhrase}</em></p>
      </div>
    </div>
  );
};

export default UserCard;

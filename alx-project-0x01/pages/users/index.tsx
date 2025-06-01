import Header from "@/components/layout/Header";
import React, { useState } from "react";
import { UserData } from "../../interfaces";
import UserCard from "../../components/common/UserCard";
import UserModal from "../../components/common/UserModal";

type Props = {
  posts: UserData[];
};

const Users: React.FC<Props> = ({ posts }) => {
  const [users, setUsers] = useState<UserData[]>(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers([newUser, ...users]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add User
        </button>
      </div>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddUser}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;


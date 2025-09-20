import { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces/UserData";

interface UsersProps {
  posts: UserData[];
}

const Users = ({ posts }: UsersProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* Add User Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Add User
      </button>

      {/* Modal */}
      <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* User List */}
      <ul className="grid gap-4">
        {posts.map((user) => (
          <li
            key={user.id}
            className="p-4 border rounded-md shadow-sm hover:shadow-md"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
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

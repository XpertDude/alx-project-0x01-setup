// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces/UserProps"; // <- adjust import if your interfaces folder is different

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-sm text-gray-500">@{user.username}</p>
      <p className="mt-2 text-gray-700">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Website:</span>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          {user.website}
        </a>
      </p>
      <div className="mt-3">
        <h3 className="font-semibold text-gray-800">Company</h3>
        <p className="text-gray-700">{user.company.name}</p>
        <p className="text-sm italic text-gray-500">"{user.company.catchPhrase}"</p>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-gray-800">Address</h3>
        <p className="text-gray-700">
          {user.address.street}, {user.address.city} {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

import { FC } from "react";
import { UserData } from "@/interfaces/UserData";
import { UserProps } from "@/interfaces";

const UserModal: FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[90%] md:w-[500px] p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg font-bold"
        >
          ✕
        </button>

        {/* Modal Header */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {user ? "User Details" : "Add New User"}
        </h2>

        {/* Modal Body */}
        {user ? (
          <div className="space-y-2 text-gray-700">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        ) : (
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-md p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Username"
              className="border rounded-md p-2"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Save User
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserModal;

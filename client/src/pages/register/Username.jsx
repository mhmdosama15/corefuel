import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../utils";

const Username = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${BACKEND_URL}/api/auth/update-username`,
        {
          username,
        },
        { withCredentials: true }
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-10 items-center justify-center px-6 xl:px-0  h-screen w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:min-h-[32rem] lg:min-w-[32rem] lg:max-w-[32rem] p-6 border border-[#dadada] justify-between items-center text-center rounded bg-[#efefef]"
      >
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Create a username?</h2>
          <p className="text-sm">One gymrat added to the family</p>
          <input
            id="name"
            className="bg-white rounded w-72 mt-6 px-4 py-2"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-6 mt-6">
          <Link
            to={"/signup"}
            className="border border-[#dadada] bg-white text-black px-4 py-2"
          >
            Back
          </Link>
          <button
            type="submit"
            className="border border-[#dadada] bg-white text-black px-4 py-2"
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Username;

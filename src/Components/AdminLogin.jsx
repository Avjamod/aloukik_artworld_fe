import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/constant";

const AdminLogin = () => {
  const [userName, setUserName] = useState("Admin@1234");
  const [password, setPassword] = useState("Admin@1234");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await axios.post(
        BACKEND_URL + "/admin/login",
        { userName, password },
        { withCredentials: true }
      );
      return navigate("/Admin");
    } catch (err) {
      setError(err.response.data);
      console.error(err);
    }
  };
  return (
    <div className=" items-center justify-center my-5">
      <div className="px-4 md:pt-18 pt-16"></div>
      <div className="flex justify-center">
        <fieldset className="fieldset w-sm bg-base-200 border border-base-300 p-4 rounded-box ">
          <legend className="fieldset-legend">Admin Login</legend>

          <label className="fieldset-label">User Name</label>
          <input
            type="email"
            className="input"
            placeholder="user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <label className="fieldset-label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-600">{error}</p>
          <button className="btn btn-neutral mt-4" onClick={handleLogin}>
            Login
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default AdminLogin;

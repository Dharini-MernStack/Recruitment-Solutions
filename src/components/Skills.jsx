import React, { useState } from "react";
import { Link } from "react-scroll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Skills = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("User signed in successfully");
        response.json(data);
        setEmail("");
        setPassword("");
      } else {
        toast.error("Error signing in");
      }
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  return (
    <div name="skills" className= "w-full h-screen bg-[#2F4F4F] text-gray-300 flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-2xl font-bold mb-4">Sign In</h1>
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button
        className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
        type="submit"
      >
        Sign In
      </button>
    </form>
    <p className="text-sm">
        New user?{" "}
        <Link className=" hover:bg-pink-600 hover:border-pink-600" to="work" smooth={true} duration={500}>
            <u>SignUp</u>
          </Link>
      </p>
  </div>
  );
};

export default Skills;

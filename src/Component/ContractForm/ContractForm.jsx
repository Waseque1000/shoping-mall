import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../FireBase/Firebase.config";
const auth = getAuth(app);

const ContractForm = () => {
  const [ok, setOk] = useState("");
  const handelSubmit = (event) => {
    setOk(" ");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const logedUser = result.user;
        console.log(logedUser);

        alert("Thank you for your interest,, We will reply very soon");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });

    //! google
  };
  const google = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const google = result.user;
        console.log(google);
        alert("Thank you for your interest,, We will reply very soon");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl text-black font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handelSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 bg-white p-2 w-full border rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 bg-white p-2 w-full border rounded-md"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="mt-1 bg-white p-2 w-full border rounded-md"
              placeholder="Password"
            ></input>
          </div>
          <Link onClick={google} className="text-red-500">
            Log in with <span>Google</span>
          </Link>
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-800 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
            <p className="text-1xl text-green-700">{ok}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractForm;

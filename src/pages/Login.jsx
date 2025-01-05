import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="min-h-[80vh] flex items-center"
      action="#"
      onSubmit={onSubmitHandler}
    >
      <div className="flex flex-col m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 shadow-xl">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Log In"}
        </p>
        <p className="text-sm ">
          Plese {state === "Sign Up" ? "Create Account" : "Log In"} to book an
          appointment
        </p>
        {state === "Sign Up" ? (
          <div className="w-full mt-5">
            <p>Full Name</p>
            <input
              className="border border-gray-400 rounded-lg p-2 w-full mt-1 outline-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        ) : null}

        <div className="w-full mt-5">
          <p>Email</p>
          <input
            className="border border-gray-400 rounded-lg p-2 w-full mt-1 outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full mt-5">
          <p>Password</p>
          <input
            className="border border-gray-400 rounded-lg p-2 w-full mt-1 outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="hover:bg-blue-400 bg-blue-600 py-2 text-white rounded-md w-full text-base mt-5 transition-all duration-300"
        >
          {state === "Sign Up" ? "Create Account" : "Log In"}
        </button>
        {state === "Sign Up" ? (
          <p className="mt-5 text-sm">
            Already have an account?{" "}
            <span
              className="hover:text-blue-400 text-blue-600 cursor-pointer"
              onClick={() => setState("Log In")}
            >
              Log In
            </span>
          </p>
        ) : (
          <p className="mt-5 text-sm">
            Don't have an account?{" "}
            <span
              className="hover:text-blue-400 text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;

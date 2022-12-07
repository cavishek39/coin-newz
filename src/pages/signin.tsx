import Link from "next/link";
import React from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";

const SignIn = () => {
  return (
    <div>
      <div className="mx-auto min-h-[600px] max-w-[400px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form>
          <div className="my-4">
            <label>Email</label>
            <div className="relative my-2 w-full rounded-xl shadow-xl">
              <input
                className="w-full rounded-xl border border-input bg-primary p-2"
                type={"email"}
                placeholder={"Email"}
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="relative my-2 w-full rounded-xl shadow-xl">
              <input
                className="w-full rounded-xl border border-input bg-primary p-2"
                type={"password"}
                placeholder={"Password"}
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl">
            Sign in
          </button>
        </form>
        <p className="my-4">
          Don't have an account? <Link href={"/signup"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

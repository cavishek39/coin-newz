import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { useUserAuth } from "../context/AuthContext";

const SignIn = () => {
  const { signIn } = useUserAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (!!email && !!password) {
        setIsLoading(true);
        const response = await signIn(email, password);
        setIsLoading(false);
        router.replace("/account");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError(err.message);
      console.error(err.message);
    }
  };

  return (
    <div>
      <div className="mx-auto min-h-[600px] max-w-[400px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        {error ? <p className="my-2 bg-red-300 p-3">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="relative my-2 w-full rounded-xl shadow-xl">
              <input
                disabled={isLoading}
                className="w-full rounded-xl border border-input bg-primary p-2"
                type={"email"}
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="relative my-2 w-full rounded-xl shadow-xl">
              <input
                disabled={isLoading}
                className="w-full rounded-xl border border-input bg-primary p-2"
                type={"password"}
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="my-2 w-full rounded-2xl bg-button p-3 text-btnText shadow-xl"
            disabled={isLoading}
          >
            {!isLoading ? "Sign in" : "Signing in..."}
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

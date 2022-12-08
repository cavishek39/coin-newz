import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SavedCoin from "../components/saved-coin";
import { useUserAuth } from "../context/AuthContext";

const Account = () => {
  const { logout, user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    // checks if the user is authenticated
    if (!user?.email) {
      router.push("/signup");
    }
  }, [user?.email]);

  const handleSignOut = async () => {
    try {
      logout();
      router.replace("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="mx-auto max-w-[1140px]">
      <div className="rounded-div my-12 flex items-center justify-between py-8">
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <div>
            <p>Welcome, {user?.email}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleSignOut}
            className="rounded-2xl border px-6 py-2 shadow-lg hover:shadow-2xl"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="rounded-div my-12 flex items-center justify-between py-8">
        <div className="min-h-[300px] w-full">
          <h1 className="py-4 text-2xl font-bold">Watch List</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  );
};

export default Account;

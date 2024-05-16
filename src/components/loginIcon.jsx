/* eslint-disable @next/next/no-img-element */
import { auth } from "../auth";
import { signIn } from "next-auth/react";
import Logout from "./LogoutIcon";

const LoginIcon = async ({ type, name, value }) => {
  const session = await auth();
  return (
    <div>
      {session ? (
        <div className="flex gap-10">
          <img
            className="rounded-full w-[50px] cursor-pointer"
            src={session.user.image}
            alt={session.user.name}
          />
          <Logout />
        </div>
      ) : (
        <>
          <button
            className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
            type="submit"
            name="action"
            value="google"
          >
            Login with Google
          </button>
          <button
            className="bg-blue-400 text-white p-1 rounded-md m-1 text-lg"
            type="submit"
            name="action"
            value="github"
          >
            Login with Github
          </button>
        </>
      )}
    </div>
  );
};

export default LoginIcon;

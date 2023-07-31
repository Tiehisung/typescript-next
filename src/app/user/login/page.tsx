"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function AuthLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const results = await signIn("credentials", {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
    console.log(results);
  }
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h1 className="text-2xl text-teal-500">Login </h1>
      </div>

      <div className="grid gap-3 max-w-sm bg-white rounded-md p-3">
        <div className="grid gap-2 ">
          <h1>Username</h1>
          <input
            className="bg-slate-200"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="grid gap-2 ">
          <h1>Password</h1>
          <input
            className="bg-slate-200"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="p-3 rounded-md text-white bg-purple-800"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div>
          <Link href={"/user/signup"} className="secondary-btn">
            Signup
          </Link>
        </div>
      </div>
    </main>
  );
}

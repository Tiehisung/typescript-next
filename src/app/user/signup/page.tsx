"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUser_type] = useState("");

  async function handleSubmit() {
    console.log(username, password, user_type);
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h1 className="text-2xl text-teal-500">Signup to continue </h1>
      </div>

      <div className="grid gap-3 max-w-sm bg-white rounded-md p-3">
        <label className="grid gap-2 ">
          <h1>Username</h1>
          <input
            className="bg-slate-200"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className="grid gap-2 ">
          <h1>Password</h1>
          <input
            className="bg-slate-200"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label className="grid gap-2 ">
          <h1>User type</h1>
          <input
            className="bg-slate-200"
            type="text"
            onChange={(e) => setUser_type(e.target.value)}
          />
        </label>

        <button
          onClick={handleSubmit}
          className="p-3 rounded-md text-white bg-purple-800"
        >
          Signup
        </button>
        <div>
          <Link href={"/user/login"} className="secondary-btn">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}

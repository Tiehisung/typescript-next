import { ISearchfilters, IcarProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";
import { getServerSession } from "next-auth/next";
type Props = {
  searchParams: ISearchfilters;
};
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    return <div>You must login to past</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  );
}

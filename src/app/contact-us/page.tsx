"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Contact = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("api/auth/signin?callbackUrl=/contact-us");
    },
  });

  return <div>Contact {session?.user?.name}</div>;
};

export default Contact;

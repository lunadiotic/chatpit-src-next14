import Link from "next/link";
import React from "react";

export default function ChatSidebar() {
  return (
    <div className="text-white bg-zinc-900">
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
}

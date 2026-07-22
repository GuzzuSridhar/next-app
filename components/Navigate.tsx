"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Navigate() {
  const router = useRouter();
  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.push("/about")}
      >
        Go to About
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.push("/time")}
      >
        Go to time
      </button>
    </>
  );
}

export default Navigate;

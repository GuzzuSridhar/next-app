"use client";
import { useRouter } from "next/navigation";

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
      <br />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.push("/time")}
      >
        Show server time
      </button>

      <br />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => router.push("/locloaltime")}
      >
        Show Local Time
      </button>
    </>
  );
}

export default Navigate;

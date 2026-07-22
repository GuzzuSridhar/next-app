"use client";
import { useRouter } from "next/navigation";

function Navigate() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => router.push("/about")}
        >
          About
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => router.push("/time")}
        >
          Server Time
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => router.push("/localtime")}
        >
          Local Time
        </button>
      </div>
    </>
  );
}

export default Navigate;

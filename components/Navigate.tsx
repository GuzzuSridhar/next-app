"use client";
import { useRouter } from "next/navigation";

function Navigate() {
  const router = useRouter();
  return (
    <>
      <table>
        <td>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => router.push("/about")}
          >
            About
          </button>
        </td>

        <td>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => router.push("/time")}
          >
            Server time
          </button>
        </td>

        <td>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => router.push("/locloaltime")}
          >
            Local Time
          </button>
        </td>
      </table>
    </>
  );
}

export default Navigate;

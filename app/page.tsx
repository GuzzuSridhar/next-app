import Hello from "@/components/Hello";
import Navigate from "@/components/Navigate";
import React from "react";

function page() {
  return (
    <div className="text-3xl text-red-500 font-bold">
      Welcome to Next
      <Hello />
      <Navigate />
    </div>
  );
}

export default page;

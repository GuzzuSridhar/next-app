import Hello from "@/components/Hello";
import Navigate from "@/components/Navigate";

function page() {
  return (
    <div className="text-3xl text-blue-500 font-bold">
      Welcome to Next
      <Hello />
      <Navigate />
    </div>
  );
}

export default page;

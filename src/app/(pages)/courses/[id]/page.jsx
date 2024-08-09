"use client"; // Ensure this is at the top of the file if you use useRouter

import { useRouter } from "next/navigation";

function TestComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/test-page");
  };

  return (
    <button onClick={handleClick}>Go to Test Page</button>
  );
}

export default TestComponent;

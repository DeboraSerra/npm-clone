"use client";
import { useRouter } from "next/navigation";

function App() {
  const route = useRouter();
  route.push("/login");
}

export default App;

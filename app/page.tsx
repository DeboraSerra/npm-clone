import { Suspense } from "react";
import Error from "./components/error/error";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Error />
    </Suspense>
  );
}

export default App;

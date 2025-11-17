"use client";
import { useState } from "react";
import Bear from "../components/bear/bear";
import Form from "../components/login/form";

function App() {
  const [passwordFocus, setPasswordFocus] = useState(false);
  return (
    <div className='login'>
      <Bear passwordFocus={passwordFocus} />
      <Form setPasswordFocus={setPasswordFocus} />
    </div>
  );
}

export default App;

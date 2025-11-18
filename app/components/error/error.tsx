"use client";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import Bear from "../bear/bear";

function Error() {
  const error = useSearchParams().get("error");

  if (error === "false" || !error) {
    redirect("/login");
  }

  return (
    <div>
      <div className='login'>
        <Bear passwordFocus={false} />
        <h1
          className='text-lg'
          style={{
            margin: "8px 0",
          }}
        >
          Sorry! Something went wrong...
        </h1>
        <p
          style={{
            margin: "8px 0",
          }}
        >
          Try again later
        </p>
        <Link href='https://www.npmjs.com' className='underline'>
          Go to home page
        </Link>
      </div>
    </div>
  );
}

export default Error;

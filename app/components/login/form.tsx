"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = ({
  setPasswordFocus,
}: {
  setPasswordFocus: (val: boolean) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const route = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const data = new FormData(e.target as HTMLFormElement);
    const username = data.get("username");
    const password = data.get("password");
    console.log("Username:", username);
    console.log("Password:", password);
    const response = await fetch('/api/login', {
      method: 'POST',
      body: data,
    });
    if (response.ok) {
      // Redirect or show success message
      route.push('/login/otp');
    }
  }

  return (
    <form id='login' method='POST' action='/login' className='w-full'>
      <h1 className='border-b border-black/10 text-black/70 text-xl font-semibold form__title'>
        Sign In
      </h1>
      <div
        style={{
          marginBottom: "8px",
        }}
      >
        <div className=' nowrap flex justify-between'>
          <label id='UsernameId' className='label' htmlFor='login_username'>
            Username
          </label>
        </div>
        <div></div>
        <input
          id='login_username'
          aria-invalid='false'
          type='text'
          className='input'
          name='username'
          placeholder=''
        />
      </div>
      <div className='block float-end'>
        <a
          href='https://www.npmjs.com/forgot'
          className='underline cursor-pointer text-sm'
        >
          Forgot password?
        </a>
      </div>
      <div
        style={{
          marginBottom: "8px",
        }}
      >
        <div className=' nowrap flex justify-between'>
          <label id='PasswordId' className='label' htmlFor='login_password'>
            Password
          </label>
        </div>
        <div></div>
        <div className='relative'>
          <input
            id='login_password'
            aria-invalid='false'
            type={showPassword ? "text" : "password"}
            className='input'
            name='password'
            placeholder=''
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <button
            name='show-hide-password'
            type='button'
            aria-label='Show password'
            className='absolute top-1/2 right-0 -translate-y-1/2 text-black/70 cursor-pointer w-[60px] text-sm hover:bg-gray-400/10 before:bg-[rgb(77,77,77)]/50 before:w-px before:h-5 before:inline-block before:relative before:-left-4 before:top-1/2 before:translate-y-[20%]'
            style={{
              margin: "0px 6px",
            }}
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <input
        type='hidden'
        name='csrftoken'
        value='4btDru2tCo8Q7p2jdSPixgmxYzxAcnXDbpWlyCZt1U-'
      />
      <div
        style={{
          margin: "8px 0",
        }}
      >
        <button
          type='submit'
          className='form__button text-sm'
          onClick={(e) => {
            e.preventDefault()
            route.push('/login/otp')
          }}
        >
          Sign In
        </button>
      </div>
      <a
        href='/signup'
        className='underline cursor-pointer text-sm text-center block w-full'
        rel='npm:signup'
        style={{
          margin: "16px 0 8px"
        }}
      >
        Create Account
      </a>
    </form>
  );
};

export default Form;

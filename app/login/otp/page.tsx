import Form from "@/app/components/otp/form";

const Otp = () => {
  return (
    <div>
      <h1
        className='text-black text-xl font-semibold text-center'
        style={{
          margin: "20px 0",
        }}
      >
        Two-Factor Authentication
      </h1>
      <Form />

      <div
        className='flex items-center justify-center'
        style={{ marginTop: "32px", flexDirection: "column" }}
      >
        <p
          className='text-base'
          style={{
            margin: "16px auto",
          }}
        >
          Having problems?
        </p>
        <a
          href='/login/recovery-code?next=%2F'
          className='text-base underline'
        >
          Use a recovery code or request a reset
        </a>
      </div>
    </div>
  );
};

export default Otp;

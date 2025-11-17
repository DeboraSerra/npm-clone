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

      <div className='ba9b53df mt4'>
        <p className='tc undefined'>Having problems?</p>
        <a
          href='/login/recovery-code?next=%2F'
          className='_6126477b db center tc mt3 mb2 f5 fw6 hover-black-80undefined'
        >
          Use a recovery code or request a reset
        </a>
      </div>
    </div>
  );
};

export default Otp;

"use client";
import { useEffect, useState } from "react";
import "./bear.scss";

const Bear = ({ passwordFocus }: { passwordFocus: boolean }) => {
  const [activeEyes, setActiveEyes] = useState(0);

  //const make bear blink every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEyes((prev) => (prev + 1) % 3);
      setTimeout(() => {
        setActiveEyes(0);
      }, 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bear-container'>
      <div className={`bear-blinds ${passwordFocus ? "close" : "open"}`}>
        <img
          alt=''
          role='presentation'
          src='https://static-production.npmjs.com/97ce287600f35d9d5f2ed500630bb0ad.png'
        />
      </div>
      <div className='bear-body'>
        <div className='bear-eyes'>
          <img
            src='https://static-production.npmjs.com/a39ceb9e9ad640f4de8eee094063d890.png'
            alt=''
            role='presentation'
            className={`${activeEyes === 0 ? "visible" : "hidden"}`}
          />
          <img
            src='https://static-production.npmjs.com/ecc2a793db0bd5966246e970f9c9ff5e.png'
            alt=''
            role='presentation'
            className={activeEyes === 1 ? "visible" : "hidden"}
          />
          <img
            src='https://static-production.npmjs.com/6bf09f9948c3044dbb2c7ed8b85098dc.png'
            alt=''
            role='presentation'
            className={activeEyes === 2 ? "visible" : "hidden"}
          />
        </div>
        <img
          alt=''
          role='presentation'
          src='https://static-production.npmjs.com/c9e19250d48d66f0e9c70c9b3991bbdb.png'
        />
      </div>
    </div>
  );
};

export default Bear;

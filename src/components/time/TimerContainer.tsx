import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface TimerType {
  phone: string;
}

const TimerContainer = ({ phone }: TimerType) => {
  //   const [active, setActive] = useState(false);
  //   const [isEnded, setIsEnded] = useState(false);

  const COUNTDOWN_INICIAL_TIME_IN_SECONDS = 30; // 1 minutes
  const [secondsAmount, setSecondsAmount] = useState(
    COUNTDOWN_INICIAL_TIME_IN_SECONDS
  );

  const active = Boolean(secondsAmount <= 0) || false;

  useEffect(() => {
    // if (secondsAmount <= 0 && !isEnded) {
    //   setIsEnded(true);
    //   setActive(true);
    //   return;
    // }
    // setTimeout(() => {
    //   setSecondsAmount((state) => state - 1);
    //   setIsEnded(false);
    // }, 1000);
    if (secondsAmount > 0) {
      var interval = setInterval(() => tick(), 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [secondsAmount]);
  function tick() {
    setSecondsAmount((state) => state - 1);
  }

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  //gui lai ma
  const { handleSubmit } = useForm();

  const ReSendOTP = async () => {
    setSecondsAmount(COUNTDOWN_INICIAL_TIME_IN_SECONDS);
    await fetch("http://localhost:3000/api/v1/auth/requestOTP", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        phoneNumber: phone,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="button-parent">
      <form onSubmit={handleSubmit(ReSendOTP)}>
        <button className="button49" type="submit" disabled={!active}>
          <div className="text75">Gửi lại mã OTP</div>
        </button>
      </form>
      <div className="heading28 mt-2">
        <div className=" mt-2  rounded-xl">
          <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
            <span id="minutes">{String(minutes).padStart(2, "0")}</span>
            <span>:</span>
            <span id="seconds">{String(seconds).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerContainer;

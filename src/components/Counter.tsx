import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [start, setStart] = useState(false);

  const buttonHandler = (type) => {
    switch (type) {
      case "start": {
        setStart(true);
        break;
      }
      case "stop": {
        setStart(false);
        break;
      }
    }
  };

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 500);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [start]);

  return (
    <>
      <div>{counter}</div>
      <div>
        <button
          onClick={() => {
            buttonHandler("start");
          }}
        >
          start
        </button>
        <button onClick={() => buttonHandler("stop")}>stop</button>
      </div>
    </>
  );
};

export default Counter;

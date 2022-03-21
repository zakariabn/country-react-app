import React from "react";
import { useState } from "react";

const Mobile = () => {
  const [charge, setCharge] = useState(100);

  const decreseOf = () => {
    if (charge === 0) {
      setCharge(charge);
    } else setCharge(charge - 10);
  };
  return (
    <div>
      <h1>{charge}</h1>
      <button onClick={decreseOf}>battery down</button>
    </div>
  );
};

export default Mobile;

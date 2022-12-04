import React, { useState } from "react";

const Test = () => {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);

  //값이 다음 번 렌더링 될 때 바뀜
  const getNum = () => {
    setNum(num + 1); // 0 + 1
    setNum(num + 1); // 0 + 1
    setNum(num + 1); // 0 + 1
    setNum(num + 1); // 0 + 1
    setNum(num + 1); // 0 + 1
  };

  //prev는 렌더링 되기 전에 set이 불려지는대로 바뀜
  const getNum1 = () => {
    setNum1((prev) => prev + 1); //0+1
    setNum1((prev) => prev + 1); //1+1
    setNum1((prev) => prev + 1); //2+1
    setNum1((prev) => prev + 1); //3+1
    setNum1((prev) => prev + 1); //4+1
  };

  return (
    <div>
      <p>useState</p>
      <button onClick={getNum}>Prev : {num}</button>
      <button onClick={getNum1}>noPrev : {num1}</button>
    </div>
  );
};

export default Test;

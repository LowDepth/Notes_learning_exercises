import { useState } from "react";

const Display = ({ counter }) => {
  return <h5 className="card-title">Counter {counter}</h5>;
};

const Button = ({ onClick, text }) => {
  return (
    <a className="btn btn-primary" role="button" onClick={onClick}>
      {text}
    </a>
  );
};

const Example1 = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <>
      <div className="card text-center">
        <div className="card-body ">
          <Display counter={counter} />
          <div className="d-flex justify-content-center gap-2">
            <Button onClick={increaseByOne} text={"Plus"} />
            <Button onClick={decreaseByOne} text={"Minus"} />
            <Button onClick={setToZero} text={"Zero"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Example1;

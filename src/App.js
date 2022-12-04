import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState("");

  const { num } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="work">
      <div>
        <input type="text" value={num} onChange={() => {}} disabled></input>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        ></input>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "ADD", payload: number });
          }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "MINUS", payload: number });
            setNumber("");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "TIMES", payload: number });
            setNumber("");
          }}
        >
          *
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "DEVIDE", payload: number });
            setNumber("");
          }}
        >
          /
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "RESET", payload: number });
            setNumber("");
          }}
        >
          reset
        </button>
      </div>
      <div>
        <button
          value="1"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          1
        </button>
        <button
          value="2"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          2
        </button>
        <button
          value="3"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          3
        </button>
        <button
          value="4"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          4
        </button>
        <button
          value="5"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          5
        </button>
        <button
          value="6"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          6
        </button>
        <button
          value="7"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          7
        </button>
        <button
          value="8"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          8
        </button>
        <button
          value="9"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          9
        </button>
        <button
          value="0"
          onClick={(e) => {
            setNumber((prev) => {
              const a = e.target.value;
              return prev + a;
            });
          }}
        >
          0
        </button>
      </div>
    </div>
  );
};

export default App;

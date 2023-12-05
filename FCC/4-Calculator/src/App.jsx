// import Button from "./component/ButtonCalculator";

import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState("0");

  const clearData = () => {
    setDisplay("");
    setResult("");
  };

  const handleNumber = (event) => {
    const number = event.target.value;
    display === "0" ? setDisplay(number) : setDisplay(display + number);
  };

  const handleOperator = (event) => {
    const operator = event.target.value;
    setDisplay(display + " " + operator + " ");
  };

  const handleDelete = () => {
    setDisplay(display.toString().substring(0, display.length - 1));
  };

  const handleSum = () => {
    const result = eval(display);
    setDisplay(result);
    setResult(result);
  };

  const handleDecimal = () => {
    const arrays = display.split(" ");
    const lastElement = arrays[arrays.length - 1];

    if (!lastElement.includes(".") && isNaN(parseInt(lastElement)) === false) {
      setDisplay(display + ".");
    }
  };

  return (
    <div
      className="mx-auto h-screen flex items-center justify-center"
      id="calculator"
    >
      <div className="bg-orange-200 w-80 h-96 px-2 pt-2 border rounded-md border-BlueBG_Drum">
        <div
          className="bg-gray-900/25 px-2 border border-white rounded-md text-white"
          id="display"
        >
          <div className="text-right text-sm h-5">{display}</div>
          <span className="block text-right text-xl h-7">{result}</span>
        </div>
        <div className="pt-5 grid grid-cols-4 grid-rows-5 h-4/5">
          {/* <Button text={"AC"} />
          <Button text={"DEL"} />
          <Button text={"0"} classFill={"bg-white"} /> */}

          {/* Clear (AC) */}
          <button
            className="bg-red-600 border border-slate-400 text-white"
            id="clear"
            onClick={clearData}
          >
            AC
          </button>

          {/* Delete (DEL) */}
          <button
            className="bg-rose-200 border border-slate-400"
            id="delete"
            onClick={handleDelete}
          >
            DEL
          </button>

          {/* Divide (/) */}
          <button
            className="bg-white border border-slate-400"
            id="divide"
            value={"/"}
            onClick={handleOperator}
          >
            /
          </button>

          {/* Multiply (x) */}
          <button
            className="bg-white border border-slate-400"
            id="multiply"
            onClick={handleOperator}
            value={"*"}
          >
            X
          </button>

          {/* 7 8 9 */}
          <button
            className="bg-white border border-slate-400"
            id="seven"
            value={7}
            onClick={handleNumber}
          >
            7
          </button>
          <button
            className="bg-white border border-slate-400"
            id="eight"
            value={8}
            onClick={handleNumber}
          >
            8
          </button>
          <button
            className="bg-white border border-slate-400"
            id="nine"
            value={9}
            onClick={handleNumber}
          >
            9
          </button>

          {/* Subtract */}
          <button
            className="bg-white border border-slate-400"
            id="subtract"
            onClick={handleOperator}
            value={"-"}
          >
            -
          </button>

          {/* 4 5 6 */}
          <button
            className="bg-white border border-slate-400"
            id="four"
            value={4}
            onClick={handleNumber}
          >
            4
          </button>
          <button
            className="bg-white border border-slate-400"
            id="five"
            value={5}
            onClick={handleNumber}
          >
            5
          </button>
          <button
            className="bg-white border border-slate-400"
            id="six"
            value={6}
            onClick={handleNumber}
          >
            6
          </button>

          {/* + */}
          <button
            className="bg-white border border-slate-400"
            id="add"
            onClick={handleOperator}
            value={"+"}
          >
            +
          </button>

          {/* 1 2 3 */}
          <button
            className="bg-white border border-slate-400"
            id="one"
            value={1}
            onClick={handleNumber}
          >
            1
          </button>
          <button
            className="bg-white border border-slate-400"
            id="two"
            value={2}
            onClick={handleNumber}
          >
            2
          </button>
          <button
            className="bg-white border border-slate-400"
            id="three"
            value={3}
            onClick={handleNumber}
          >
            3
          </button>

          {/* Equals */}
          <button
            className="bg-orange-300 border border-slate-400 row-span-2"
            id="equals"
            onClick={handleSum}
          >
            =
          </button>

          {/* 0 */}
          <button
            className="bg-white border border-slate-400 col-span-2"
            id="zero"
            value="0"
            onClick={handleNumber}
          >
            0
          </button>

          {/* Decimals */}
          <button
            className="bg-white border border-slate-400"
            id="decimal"
            onClick={handleDecimal}
            value={"."}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

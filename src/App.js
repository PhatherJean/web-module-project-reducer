import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  recallMemory,
  clearMemory,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAdd = (number) => {
  //    dispatch(addOne());
  //   dispatch(applyNumber(number));
  // };

  const insertNumber = (number) => {
    dispatch(applyNumber(number));
  };

  const selectOperation = (oper) => {
    dispatch(changeOperation(oper));
  };

  const clearScreen = () => {
    dispatch(clearDisplay());
  };

  const memory = (total) => {
    dispatch(addMemory(total));
  };

  const recall = () => {
    dispatch(recallMemory());
  };

  const clearMem = () => {
    dispatch(clearMemory());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" alt="lambda logo" />{" "}
          Lambda Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={() => memory(state.total)} value={"M+"} />
              <CalcButton onClick={recall} value={"MR"} />
              <CalcButton onClick={clearMem} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => insertNumber(1)} value={1} />
              <CalcButton onClick={() => insertNumber(2)} value={2} />
              <CalcButton onClick={() => insertNumber(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => insertNumber(4)} value={4} />
              <CalcButton onClick={() => insertNumber(5)} value={5} />
              <CalcButton onClick={() => insertNumber(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => insertNumber(7)} value={7} />
              <CalcButton onClick={() => insertNumber(8)} value={8} />
              <CalcButton onClick={() => insertNumber(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={() => selectOperation("+")} value={"+"} />
              <CalcButton onClick={() => selectOperation("*")} value={"*"} />
              <CalcButton onClick={() => selectOperation("-")} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearScreen} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

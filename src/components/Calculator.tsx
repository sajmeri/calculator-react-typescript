import React, { useState } from "react";

import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

import {
  handleResetClick,
  handleInvertClick,
  handlePercentClick,
  hanldeEqualsClick,
  handleSignClick,
  handleCommaClick,
  handleNumberClick,
} from "../helpers/calculatorHelpers";

import { calcState } from "../interfaces/calcState";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  const [calc, setCalc] = useState<calcState>({
    sign: "",
    num: 0,
    res: 0,
  });

  const calculate = (
    e: React.FormEvent<HTMLButtonElement>,
    btn: string | number
  ) => {
    switch (btn) {
      case "C":
        return handleResetClick(calc);
      case "+-":
        return handleInvertClick(calc);
      case "%":
        return handlePercentClick(calc);
      case "=":
        return hanldeEqualsClick(calc);
      case "/":
      case "X":
      case "-":
      case "+":
        return handleSignClick(e, calc);
      case ".":
        return handleCommaClick(e, calc);
      default:
        return handleNumberClick(e, calc);
    }
  };
  const handleButtonClick = (
    e: React.FormEvent<HTMLButtonElement>,
    btn: string | number
  ) => {
    const result = calculate(e, btn);
    const newState: calcState = {
      sign: result?.sign || "",
      num: Number(result?.num),
      res: Number(result?.res),
    };
    setCalc(newState);
  };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={(e: React.FormEvent<HTMLButtonElement>) =>
                handleButtonClick(e, btn)
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};
export default Calculator;

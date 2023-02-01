import { calcState } from "../interfaces/calcState";

export const math = (a:number, b:number, sign:string) => {
    switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "X":
        return a * b;
      default:
        return a / b;
    }
  };
  
  export const handleNumberClick = (e:React.FormEvent<HTMLButtonElement>, calc:calcState) => {
    e.preventDefault();

    const target = e.target as Element; //this is necessary to get the innerHTML, else it complains property doesn't exist
    const value = target.innerHTML;
    let num;
  
    if (calc.num === 0 && value === "0") {
      num = 0;
    } else if (calc.num % 1 === 0) {
      num = Number(calc.num + value);
    } else {
      num = calc.num + value;
    }
  
    // if (calc.num.length < 16) {
  
    return {
      ...calc,
      num: num,
      res: !calc.sign ? 0 : calc.res,
    };
    // }
  };
  
  export const handleCommaClick = (e:React.FormEvent<HTMLButtonElement>, calc:calcState) => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;
  
    return {
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    };
  };
  
  export const handleSignClick = (e:React.FormEvent<HTMLButtonElement>, calc:calcState) => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;
  
    return {
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    };
  };
  
  export const hanldeEqualsClick = (calc:calcState) => {
    if (calc.sign && calc.num) {
      let response =
        calc.num === 0 && calc.sign === "/"
          ? "Can't divide with 0"
          : math(Number(calc.res), Number(calc.num), calc.sign);
  
      return {
        ...calc,
        res: response,
        sign: "",
        num: 0,
      };
    }
  };
  
  export const handleInvertClick = (calc:calcState) => {
    return {
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    };
  };
  
  export const handlePercentClick = (calc:calcState) => {
    let num = calc.num ? calc.num : 0;
    let res = calc.res ? calc.res : 0;
  
    return {
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    };
  };
  
  export const handleResetClick = (calc:calcState) => {
    return {
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    };
  };
  
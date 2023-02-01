import { FormEvent } from "react";
import "./Button.css";

interface Props {
  className: string;
  value: string | number;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}
const Button = ({ className, value, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;

import "./Screen.css";

interface Props {
  value: number;
}

const Screen = ({ value }: Props) => {
  return <div className="screen">{value}</div>;
};

export default Screen;

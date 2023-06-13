import "./styles.css";

export interface TitleProps {
  text?: string;
}

const Title = ({ text = "hola" }: TitleProps): JSX.Element => {
  return <h1 className="h1-title">{text}</h1>;
};

export default Title;

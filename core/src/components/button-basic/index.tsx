import { ButtonStyled } from "./styled";

export interface ButtonBasicProps {
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  text: string;
  title?: string;
  colorVariant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonBasic = ({
  variant = "contained",
  size = "medium",
  text,
  title,
  colorVariant = "primary",
  disabled = false,
  onClick = () => null,
}: ButtonBasicProps): JSX.Element => (
  <ButtonStyled
    variant={variant}
    size={size}
    title={title ?? text}
    colorvariant={colorVariant}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </ButtonStyled>
);

export default ButtonBasic;

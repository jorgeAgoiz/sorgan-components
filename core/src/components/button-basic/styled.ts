import Button from "@mui/material/Button";
import styled from "@mui/styled-engine";

interface ButtonStyledProps {
  colorvariant: "primary" | "secondary";
}

export const ButtonStyled = styled(Button)(
  ({ colorvariant }: ButtonStyledProps) => {
    let color: string;
    let borderColor: string;

    switch (colorvariant) {
      case "primary":
        color = "#f5eb41";
        borderColor = "#202020";
        break;
      case "secondary":
        color = "#202020";
        borderColor = "#f5eb41";
        break;
      default:
        color = "#f5eb41";
        borderColor = "#202020";
    }

    return {
      backgroundColor: color,
      borderColor: borderColor,
      borderWidth: "4px",
    };
  }
);

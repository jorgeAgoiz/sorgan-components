import Button from "@mui/material/Button";
import styled from "@mui/styled-engine";

interface ButtonStyledProps {
  colorvariant: "primary" | "secondary";
}

export const ButtonStyled = styled(Button)(
  ({ colorvariant }: ButtonStyledProps) => {
    let color: string;
    let borderColor: string;
    let textColor: string;
    let hoverBackgroundColor: string;
    let hoverTextColor: string;

    switch (colorvariant) {
      case "primary":
        color = "#f5eb41";
        borderColor = "#202020";
        textColor = "#202020";
        hoverBackgroundColor = "#202020";
        hoverTextColor = "white";
        break;
      case "secondary":
        color = "#202020";
        borderColor = "#f5eb41";
        textColor = "white";
        hoverBackgroundColor = "#f5eb41";
        hoverTextColor = "#202020";
        break;
      default:
        color = "#f5eb41";
        borderColor = "#202020";
        textColor = "#202020";
        hoverBackgroundColor = "#202020";
        hoverTextColor = "white";
        break;
    }

    return {
      backgroundColor: color,
      borderColor: borderColor,
      borderWidth: "4px",
      color: textColor,
      ":hover": {
        backgroundColor: hoverBackgroundColor,
        color: hoverTextColor,
      },
    };
  }
);

import styled from "@emotion/styled";
import { ElementType } from "react";
import { PolymorphicComponentProp } from "./types";

type ButtonProps = {
  size?: "large" | "medium" | "small";
  color?: "primary" | "secondary" | "white";
};

const StyledButton = styled.button<ButtonProps>(
  {
    display: "inline-block",
    width: "19.7rem",
    height: "7rem",
    border: "none",
    cursor: "pointer",
  },
  (props) => {
    const {
      colors: { primary, secondary, white },
      borderRadius,
    } = props.theme;

    return {
      borderRadius: borderRadius.large,
      backgroundColor:
        props.color === "primary"
          ? primary
          : props.color === "secondary"
          ? secondary
          : white,
    };
  }
);

export const Button = <C extends ElementType = "button">({
  size = "medium",
  color = "primary",
  children,
}: PolymorphicComponentProp<C, ButtonProps>) => {
  return (
    <StyledButton size={size} color={color}>
      {children}
    </StyledButton>
  );
};

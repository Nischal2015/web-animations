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
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    color: "#fff",
    fontSize: "1.8rem",
    height: "7rem",
    padding: "0 3.5rem",
  },
  (props) => {
    const {
      colors: { primary, secondary, white },
      borderRadius,
    } = props.theme;

    const bgColor = {
      backgroundColor:
        props.color === "primary"
          ? primary
          : props.color === "secondary"
          ? secondary
          : white,
    };

    if (props.size === "large") {
      return {
        borderRadius: borderRadius.large,
        fontSize: "2rem",
        width: "19.7rem",
        height: "7rem",
        ...bgColor,
      };
    }

    if (props.size === "small") {
      return {
        borderRadius: borderRadius.default,
        fontSize: "1.5rem",
        height: "6rem",
        padding: "0 3rem",
        ...bgColor,
      };
    }

    return {
      borderRadius: borderRadius.large,
      ...bgColor,
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

import { ElementType, ReactNode, useRef } from "react";
import styled from "@emotion/styled";
import { PolymorphicComponentProp } from "./types";

type LinkProps = {
  href: string;
  children?: ReactNode;
  active?: boolean;
};

const StyledLink = styled.a<LinkProps>(
  {
    textDecoration: "none",
    display: "inline-block",
    fontSize: "1.8rem",
    fontWeight: "500",
    position: "relative",
    transition: "200ms all ease-in-out",
  },
  (props) => ({
    "&:link, &:visited": {
      color: props.active ? props.theme.colors.white : props.theme.colors.gray,
    },
    "&:hover, &:active, &.active": {
      color: props.theme.colors.white,
    },
    "&::after": {
      opacity: props.active ? 1 : 0,
      position: "absolute",
      content: "''",
      bottom: `-${props.theme.spacing.default}`,
      left: "50%",
      transform: "translateX(-50%)",
      display: "inline-block",
      height: "4px",
      width: "4px",
      borderRadius: "50%",
      backgroundColor: props.theme.colors.primary,
      transition: "200ms opacity ease-in-out",
    },
    "&:hover::after, &:active::after": {
      opacity: 1,
    },
  })
);

export const Link = <C extends ElementType = "a">({
  href,
  children = "",
  active = false,
}: PolymorphicComponentProp<C, LinkProps>) => {
  return (
    <StyledLink href={href} active={active}>
      {children}
    </StyledLink>
  );
};

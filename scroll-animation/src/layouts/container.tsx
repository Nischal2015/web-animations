// import { CSSProperties, ElementType, PropsWithChildren } from "react";
import styled from "@emotion/styled";
// import { PolymorphicComponentProp } from "../components/ui/types";

// type ContainerProps = PropsWithChildren<{ style?: CSSProperties }>;

export const Container = styled.div({
  maxWidth: "140rem",
  margin: "0 auto",
});

// export const Container = <C extends ElementType = "div">({
//   children = "",
//   style = {},
// }: PolymorphicComponentProp<C, ContainerProps>) => {
//   return <StyledContainer style={style}>{children}</StyledContainer>;
// };

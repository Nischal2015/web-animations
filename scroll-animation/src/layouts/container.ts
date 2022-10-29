import styled from "@emotion/styled";

const ContainerBase = styled.div({
  margin: "0 auto",
});

export const Container = styled(ContainerBase)({
  maxWidth: "115rem",
  padding: "0 22rem",
});

export const NavBarContainer = styled(ContainerBase)({
  maxWidth: "140rem",
  padding: "5rem 0 0",
  display: "block",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
});

import styled from "@emotion/styled";

export const Container = styled.div({
  maxWidth: "140rem",
  margin: "0 auto",
});

export const NavBarContainer = styled(Container)({
  padding: "5rem 0 0",
  display: "block",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
});

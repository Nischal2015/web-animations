import logo from "../assets/navbar/logo_white.svg";
import search from "../assets/navbar/search.svg";
import styled from "@emotion/styled";
import { Link } from "../components";
import { NavBarContainer } from "./container";

type SpanStyleProps = {
  height?: number;
  width?: number;
};

const StyledDiv = styled.div({
  display: "flex",
  alignItems: "center",
});

const StyledNavbar = styled.nav(
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "auto",
  },
  (props) => ({
    gap: props.theme.spacing.larger,
  })
);

const StyledSpan = styled.span<SpanStyleProps>(
  {
    display: "inline-block",
    cursor: "pointer",
    height: "2.4rem",
    width: "2.4rem",
    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  (props) =>
    props.height
      ? {
          height: `${props?.height! * 0.1}rem`,
        }
      : {},
  (props) =>
    props.width
      ? {
          width: `${props?.width! * 0.1}rem`,
        }
      : {}
);

const StyledMainNav = styled.div(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  (props) => ({
    gap: props.theme.padding.large,
  })
);

export default function Navbar() {
  return (
    <NavBarContainer>
      <StyledDiv>
        <StyledSpan width={149} height={40}>
          <img src={logo} alt='sleepiest logo' />
        </StyledSpan>
        <StyledNavbar>
          <StyledMainNav>
            <Link href='#' active>
              Home
            </Link>
            <Link href='#'>Blog</Link>
            <Link href='#'>Top Articles</Link>
            <Link href='#'>Careers</Link>
          </StyledMainNav>
          <StyledSpan
            style={{
              padding: "2.4rem",
              backgroundColor: "#ffffff22",
              borderRadius: "50%",
            }}
          >
            <img src={search} alt='search icon' />
          </StyledSpan>
        </StyledNavbar>
      </StyledDiv>
    </NavBarContainer>
  );
}

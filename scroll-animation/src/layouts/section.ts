import styled from "@emotion/styled";

export const SectionHero = styled.section({
  position: "relative",
  height: "75.5vw",
  maxHeight: "200rem",
});

export const Section = styled.section<{
  background?: "primary" | "secondary" | "tertiary";
}>((props) => ({
  backgroundColor: props.background
    ? props.theme.background[props.background]
    : props.theme.background.primary,
}));

import styled from "@emotion/styled";
import { motion, useScroll, useTransform } from "framer-motion";
import { featureAnimationVariant } from "../../data";
import { Section } from "../../layouts";
import { useInView } from "../../hooks";

const MoreTitle = styled(motion.div)((props) => ({
  textAlign: "center",
  margin: "0 auto 177px",
  maxWidth: "758px",
  "& h2": {
    fontSize: "5.6rem",
    lineHeight: 1.1,
    fontWeight: 700,
    letterSpacing: "-1px",
    "& span": {
      color: props.theme.colors.secondary,
    },
  },
}));

const MoreContent = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "57px",
  transform: "rotate(-2deg)",
});

const MoreContentRow = styled(motion.div)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
  "& > *": {
    flexGrow: 0,
    flexShrink: 0,
  },
});

const ImageSpan = styled.span<{ url: string }>((props) => ({
  backgroundImage: `url(${props.url})`,
  display: "block",
  width: "335px",
  height: "221px",
  borderRadius: "22px",
}));

export default function More() {
  const { ref, isInView } = useInView(0.35, true);
  const { scrollY } = useScroll({ target: ref });

  const scrollYAmount = (positiveX: 1 | -1 = 1) =>
    useTransform<number, number>(
      [scrollY],
      ([newScroll]) => positiveX * (0.1 * newScroll - 328)
    );

  return (
    <Section ref={ref} background='primary'>
      <MoreTitle
        variants={featureAnimationVariant}
        initial='initial'
        animate={isInView ? "animate" : "none"}
      >
        <h2>
          Over 250+ sleep sounds, stories & meditations to help you{" "}
          <span>sleep better</span>
        </h2>
      </MoreTitle>
      <MoreContent>
        <MoreContentRow style={{ x: scrollYAmount() }}>
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/10/336x222_lunar_lullaby_sleep.jpg' />
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/10/336x222_lunar_lullaby_sleep.jpg' />
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/11/336x222_clockmakers-watch_sleep.jpg' />
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/10/336x222_kokos_wish_sleep.jpg' />
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/10/336x222_cleopatra_sleep.jpg' />
        </MoreContentRow>

        <MoreContentRow style={{ x: scrollYAmount(-1), marginBottom: "57px" }}>
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/10/336x222_around_the_world_in_80_days_sleep.jpg' />
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/09/336x222_whispering_pines_sleep.jpg' />
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/09/336x222_yogic_sleep_sleep.jpg' />
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/09/336x222_under_an_umbrella_sleep.jpg' />
          <ImageSpan url='https://www.sleepiest.com/wp-content/uploads/2020/09/336x222_sailing_to_sleep_sleep.jpg' />
        </MoreContentRow>
      </MoreContent>
    </Section>
  );
}

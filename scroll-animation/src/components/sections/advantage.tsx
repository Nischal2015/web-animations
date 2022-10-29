import { useRef } from "react";
import styled from "@emotion/styled";
import { Container, Section } from "../../layouts";
import adv1 from "../../assets/advantage/adv-1.png";
import adv2 from "../../assets/advantage/adv-2.png";
import adv3 from "../../assets/advantage/adv-3.png";
import { motion, Variants, useInView } from "framer-motion";
import { Button } from "../ui";

const AdvantageContainer = styled(motion.div)({
  padding: "22.4rem 0 16.4rem",
});

const AdvantageContentContainer = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
  justifyItems: "start",
  columnGap: "7.2rem",
  margin: "0 3.8rem 9.6rem",
});

const AdvantageItemCard = styled(motion.div)(
  {
    display: "flex",
    flexDirection: "column",
    transform: "translateY(960)",
  },
  (props) => ({
    gap: props.theme.padding.default,
  })
);

const CardImageDiv = styled(motion.div)({
  display: "inline-block",
  height: "9.5rem",
  width: "9.5rem",
  opacity: 0,
});

const CardTitle = styled(motion.div)({
  fontSize: "4rem",
  fontWeight: 700,
  lineHeight: "4.4rem",
  opacity: 0,
});

const CardText = styled.p({
  fontSize: "2.4rem",
  lineHeight: "3.4rem",
  color: "#fff",
  opacity: 0.7,
  fontWeight: 500,
});

const ButtonContainer = styled(motion.div)({
  opacity: 0,
  textAlign: "center",
});

export default function Advantage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });

  const cardVariant: Variants = {
    hide: {},
    show: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const contentVariant: Variants = {
    hide: {},
    show: {
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const itemVariant: Variants = {
    hide: {},
    show: {
      y: -96,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Section ref={ref}>
      <Container>
        <AdvantageContainer
          variants={cardVariant}
          animate={isInView ? "show" : "hide"}
        >
          <AdvantageContentContainer>
            <AdvantageItemCard variants={contentVariant}>
              <CardImageDiv variants={itemVariant}>
                <img src={adv1} alt='Sleep Better' />
              </CardImageDiv>

              <CardTitle variants={itemVariant}>
                <span>Sleep Better</span>
                <br />
                <span>wake happier</span>
              </CardTitle>

              <motion.div variants={itemVariant} style={{ opacity: 0 }}>
                <CardText>
                  Explore sleep sounds, stories and meditations, to help you
                  sleep better and wake up happier.
                </CardText>
              </motion.div>
            </AdvantageItemCard>

            <AdvantageItemCard variants={contentVariant}>
              <CardImageDiv variants={itemVariant}>
                <img src={adv2} alt='Track Progress' />
              </CardImageDiv>

              <CardTitle variants={itemVariant}>
                <span>Track your</span>
                <br />
                <span>progress</span>
              </CardTitle>

              <motion.div style={{ opacity: 0 }} variants={itemVariant}>
                <CardText>
                  Just 5 days of Sleepiest can help you sleep an average of 32
                  minutes longer each night.
                </CardText>
              </motion.div>
            </AdvantageItemCard>

            <AdvantageItemCard variants={contentVariant}>
              <CardImageDiv variants={itemVariant}>
                <img src={adv3} alt='Join over 2M' />
              </CardImageDiv>

              <CardTitle variants={itemVariant}>
                <span>Join over</span>
                <br />
                <span>2 million</span>
              </CardTitle>

              <motion.div style={{ opacity: 0 }} variants={itemVariant}>
                <CardText>
                  Join over 2 million people around the world improving their
                  health & happiness with Sleepiest.
                </CardText>
              </motion.div>
            </AdvantageItemCard>
          </AdvantageContentContainer>
          <ButtonContainer variants={itemVariant}>
            <Button color='primary'>Try for Free</Button>
          </ButtonContainer>
        </AdvantageContainer>
      </Container>
    </Section>
  );
}

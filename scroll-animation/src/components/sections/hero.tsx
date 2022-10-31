import { Container, SectionHero } from "../../layouts";
import styled from "@emotion/styled";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useParallax } from "../../hooks";
import { Button } from "../ui";
import appleStoreBtn from "../../assets/hero/apple-store-btn.svg";
import hero1 from "/src/assets/hero/hero-1.png";
import hero2 from "/src/assets/hero/hero-2.png";
import hero3 from "/src/assets/hero/hero-3.png";

type URL = {
  url: string;
};

const HeroBgBase = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const HeroBgContainer = styled(HeroBgBase)({
  contain: "content",
  overflow: "hidden",
  zIndex: -1,
});

const HeroBgItem = styled(HeroBgBase.withComponent(motion.div))({
  width: "100%",
});

const HeroBgItemSpan = styled(HeroBgBase.withComponent("span"))<URL>(
  {
    display: "block",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
    backfaceVisibility: "hidden",
  },
  (props) => ({
    backgroundImage: `url(${props.url})`,
  })
);

const HeroContentContainer = styled.div({
  padding: "22.5rem 0 0",
  textAlign: "center",
});

const HeroContentHeadingContainer = styled(motion.div)({
  color: "#fff",
  marginBottom: "2rem",
});

const HeroContentSubHeadingContainer = styled(motion.div)({
  color: "#fff",
  letterSpacing: ".01rem",
  maxWidth: "63rem",
  margin: "0 auto 4.8rem",
  "& h2": {
    opacity: 0.7,
  },
});

const HeroButtonSpan = styled.span({
  display: "block",
  "& img": {
    width: "100%",
    height: "100%",
    marginTop: "2px",
    opacity: "0.8",
  },
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollY);

  return (
    <SectionHero ref={ref}>
      <HeroBgContainer>
        <HeroBgItem
          layout
          style={{ y }}
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 0.85,
            bounce: 0.05,
            damping: 30,
          }}
        >
          <HeroBgItemSpan url={hero1} />
        </HeroBgItem>
        <HeroBgItem
          layout
          style={{ y }}
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            bounce: 0.05,
            damping: 30,
          }}
        >
          <HeroBgItemSpan url={hero2} />
        </HeroBgItem>
        <HeroBgItem>
          <HeroBgItemSpan url={hero3} />
        </HeroBgItem>
      </HeroBgContainer>
      <HeroContentContainer>
        <Container>
          <HeroContentHeadingContainer
            initial={{ opacity: 0.15, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            <h1>The Sleepiest App</h1>
          </HeroContentHeadingContainer>
          <HeroContentSubHeadingContainer
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.6,
              bounce: 0.15,
              mass: 0.8,
              damping: 15,
              stiffness: 300,
            }}
          >
            <h2>
              Can't sleep? Try bedtime stories, sleep sounds & meditations to
              help you fall asleep fast.
            </h2>
          </HeroContentSubHeadingContainer>
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.65,
              bounce: 0.15,
              mass: 0.8,
              damping: 15,
              stiffness: 320,
            }}
          >
            <Button color='white'>
              <HeroButtonSpan>
                <img src={appleStoreBtn} alt='Apple Store Button' />
              </HeroButtonSpan>
            </Button>
          </motion.div>
        </Container>
      </HeroContentContainer>
    </SectionHero>
  );
}

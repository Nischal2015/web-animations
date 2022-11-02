import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import { motion, Variants } from "framer-motion";
import { Container, Section } from "../../layouts";
import { Card } from "../composite";
import mockReviews from "../../data/mockReviews.json";

import avatar1 from "../../assets/review/avatar-1.avif";
import avatar2 from "../../assets/review/avatar-2.avif";
import avatar3 from "../../assets/review/avatar-3.avif";
import avatar4 from "../../assets/review/avatar-4.avif";
import avatar5 from "../../assets/review/avatar-5.avif";
import avatar6 from "../../assets/review/avatar-6.avif";
import avatar7 from "../../assets/review/avatar-7.avif";
import avatar8 from "../../assets/review/avatar-8.avif";
import avatar9 from "../../assets/review/avatar-9.avif";
import { useLayoutEffect, useRef, useState } from "react";
import { useInView } from "../../hooks";

const CardContainer = styled(motion.div)(
  {
    display: "flex",
    alignItems: "stretch",
    "& > *": {
      flexShrink: 0,
      flexGrow: 0,
    },
  },
  (props) => ({
    columnGap: props.theme.spacing.largest,
  })
);

const ReviewContent = styled.div({
  paddingBottom: "26rem",
});

const TitleDiv = styled(motion.div)({
  marginBottom: "10rem",
  "& h2": {
    fontSize: "5.6rem",
    lineHeight: 1.1,
    fontWeight: 700,
    letterSpacing: "-1px",
  },
});

export default function Review() {
  const [width, setWidth] = useState(0);
  const [containerOffset, setContainerOffset] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const { ref: containerRef, isInView } = useInView(0.8, true);

  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar7,
    avatar3,
    avatar1,
    avatar6,
    avatar8,
  ];

  const titleDivVariant: Variants = {
    hide: { y: 96, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.75,
        stiffness: 120,
        bounce: 0.05,
        damping: 15,
        velocity: 4,
      },
    },
  };

  const reshapedMockedDatas = mockReviews.map((mockReview, index) => ({
    ...mockReview,
    imageUrl: avatars[index],
    key: nanoid(),
  }));

  useLayoutEffect(() => {
    ref && ref.current && setWidth(ref.current.scrollWidth);
    containerRef &&
      containerRef.current &&
      setContainerOffset(containerRef.current.getBoundingClientRect().left);
  }, []);

  return (
    <Section background='primary'>
      <ReviewContent>
        <Container>
          <TitleDiv
            ref={containerRef}
            variants={titleDivVariant}
            animate={isInView ? "show" : "hide"}
          >
            <h2>
              <span>What our users</span>
              <br />
              <span>say about us</span>
            </h2>
          </TitleDiv>
          <CardContainer
            drag='x'
            initial={{ x: -120 }}
            dragConstraints={{
              right: -120,
              left: -(width - window.innerWidth + containerOffset + 1.5 * 120),
            }}
            dragElastic={0.1}
            dragTransition={{
              bounceStiffness: 1000,
              bounceDamping: 300,
              power: 0.02,
              timeConstant: 100,
            }}
            ref={ref}
          >
            {reshapedMockedDatas.map((data) => (
              <Card {...data} />
            ))}
          </CardContainer>
        </Container>
      </ReviewContent>
    </Section>
  );
}

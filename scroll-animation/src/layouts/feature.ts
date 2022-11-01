import styled from "@emotion/styled";
import { motion } from "framer-motion";

type FeatureContentProps = {
  featureLg?: boolean;
  featureMd?: boolean;
};

export const FeatureContent = styled.div<FeatureContentProps>(
  {
    padding: "13rem 0 12.1rem",
  },
  (props) => {
    if (props.featureLg) {
      return {
        padding: "23.4rem 0 17.4rem",
      };
    } else if (props.featureMd) {
      return {
        padding: "17.5rem 0 18rem",
      };
    }
  }
);

export const FeatureBody = styled.div({
  maxWidth: "42rem",
});

export const FeatureGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
});

export const FeatureTitle = styled(motion.div)({
  marginBottom: "2.8rem",
  "& > h2": {
    fontSize: "5.6rem",
    lineHeight: 1.1,
    letterSpacing: "-0.5px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
});

export const FeatureDescription = styled(motion.div)({
  marginBottom: "6rem",
  "& > p": {
    fontWeight: 500,
    fontSize: "2rem",
    lineHeight: "140%",
    opacity: 0.7,
    letterSpacing: "-0.1px",
  },
});

export const ImageDiv = styled.div({
  justifyContent: "center",
});

export const FeatureImage = styled.div({
  position: "relative",
  width: "23.9rem",
  height: "50.8rem",
  margin: "0 auto",
});

export const FeatureImageSpan = styled.span<{ url: string }>(
  {
    display: "inline-block",
    width: "100%",
    height: "100%",
  },
  (props) => ({
    backgroundImage: `url(${props.url})`,
  })
);

export const FeatureImageParticle = styled.div({
  position: "absolute",
  background: "#ff000055",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

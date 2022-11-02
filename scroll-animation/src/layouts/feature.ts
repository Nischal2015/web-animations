import styled from "@emotion/styled";
import { motion } from "framer-motion";

type FeatureContentProps = {
  featureLg?: boolean;
  featureMd?: boolean;
};

type FeatureParticleProps = {
  width: number;
  height: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

export const FeatureContent = styled.div<FeatureContentProps>(
  {
    padding: "17.5rem 0 18rem",
  },
  (props) => {
    if (props.featureLg) {
      return {
        padding: "23.4rem 0 17.4rem",
      };
    } else if (props.featureMd) {
      return {
        padding: "13rem 0 12.1rem",
      };
    }
  }
);

export const FeatureBody = styled(motion.div)({
  maxWidth: "42rem",
});

export const FeatureGrid = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
  alignItems: "center",
});

export const FeatureTitle = styled(motion.div)({
  marginBottom: "2.8rem",
  "& > h2": {
    fontSize: "5.6rem",
    lineHeight: 1.1,
    letterSpacing: "-1.5px",
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

export const FeatureImage = styled(motion.div)({
  width: "23.9rem",
  height: "50.8rem",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
});

export const FeatureImageSpan = styled(motion.span)<{ url: string }>(
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
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: -1,
});

export const FeatureParticle = styled(motion.div)<FeatureParticleProps>(
  (props) => {
    const cssObject = {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    } as FeatureParticleProps;

    const cssCompatibleKeys = Object.keys(props).filter(
      (key) => key in cssObject
    );
    const filteredKeys = cssCompatibleKeys.filter(
      (k) => props[k as keyof typeof props]
    );
    const filteredObject = filteredKeys.reduce(
      (a, v) => ({ ...a, [v]: `${props[v as keyof typeof props]}px` }),
      {}
    );

    return {
      position: "absolute",
      width: `${props.width}rem`,
      height: `${props.height}rem`,
      ...filteredObject,
      "& img": {
        width: "100%",
        height: "100%",
      },
    };
  }
);

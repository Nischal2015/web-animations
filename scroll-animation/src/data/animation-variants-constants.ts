import { Variants } from "framer-motion";

export const featureAnimationVariant: Variants = {
  none: {},
  initial: { y: 96, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      velocity: 1,
    },
  },
};

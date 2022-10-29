import { MotionValue, useTransform } from "framer-motion";

export const useParallax = (offset: MotionValue<number>) => {
  return useTransform<number, number>([offset], ([newOffset]) => {
    return 0.45 * newOffset;
  });
};

import { MotionValue, useTransform } from "framer-motion";

export const useParallax = (
  value: MotionValue<number>,
  offset: MotionValue<number>
) => {
  const mapper = useTransform(value, [0, 1], [1, -1]);

  return useTransform<number, number>(
    [offset, mapper],
    ([newOffset, newMapper]) => {
      return 0.45 * newOffset - newMapper * 35;
    }
  );
};

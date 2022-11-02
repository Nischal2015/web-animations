import {
  useMotionValue,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { RefObject, useLayoutEffect, useState } from "react";

type FeatureScrollProps = {
  ref: RefObject<HTMLElement>;
  amount: number;
  scrollSpeed: number;
};

export const useFeatureScroll = ({
  ref,
  amount,
  scrollSpeed,
}: FeatureScrollProps) => {
  const [sectionHeight, setSectionHeight] = useState(0);
  const motionSectionTop = useMotionValue(0);
  const { scrollY } = useScroll({ target: ref });
  const scrollRange = useTransform<number, number>(
    [motionSectionTop, scrollY],
    ([newSectionTop, newScrollY]) => (newScrollY - newSectionTop) / 2
  );

  const heightRange = useTransform(
    scrollRange,
    [0, sectionHeight / scrollSpeed],
    [80, -40]
  );

  useLayoutEffect(() => {
    if (ref && ref.current) {
      setSectionHeight(ref.current.offsetHeight);
      motionSectionTop.set(
        ref.current.getBoundingClientRect().top - window.innerHeight / amount
      );
    }
  }, []);

  return { heightRange };
};

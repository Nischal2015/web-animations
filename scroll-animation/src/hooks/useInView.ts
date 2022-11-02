import { useInView as useFramerInView } from "framer-motion";
import { useRef } from "react";

export const useInView = (amount: number, once: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useFramerInView(ref, { amount, once });
  return { ref, isInView };
};

import styled from "@emotion/styled";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CellProps = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
};

export const CELL_SIZE = 60;

const Container = styled.div({
  width: `${CELL_SIZE}px`,
  height: `${CELL_SIZE}px`,
  border: "1px dashed #333",
  color: "#555",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
});

function Cell({ mouseX, mouseY }: CellProps) {
  const [position, setPosition] = useState([0, 0]);
  const ref = useRef<HTMLDivElement>(null);

  const direction = useTransform<number, number>(
    [mouseX, mouseY],
    ([newX, newY]) => {
      const diffX = newX - position[0];
      const diffY = newY - position[1];
      const angleRadius = Math.atan2(diffY, diffX);
      return Math.floor(angleRadius * (180 / Math.PI));
    }
  );

  useEffect(() => {
    if (!ref.current) return;
    console.log(ref.current);

    const rect = ref.current.getBoundingClientRect();
    // center x coordinate
    const x = rect.x + CELL_SIZE / 2;
    // center y coordinate
    const y = rect.y + CELL_SIZE / 2;
    setPosition([x, y]);
  }, [ref.current]);

  return (
    <Container ref={ref}>
      <motion.div style={{ rotate: direction, fontSize: "1.4rem" }}>
        →
      </motion.div>
    </Container>
  );
}

export default Cell;

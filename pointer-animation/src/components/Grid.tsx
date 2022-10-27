import styled from "@emotion/styled";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  useVelocity,
  AnimationOptions,
} from "framer-motion";
import { useEffect, useState } from "react";
import Cell, { CELL_SIZE } from "./Cell";

type SizeProps = {
  columns: number;
  rows: number;
};

type MouseProps = {
  mouseX: number;
  mouseY: number;
};

const Container = styled(motion.div)<{
  columns: number;
}>(
  {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "grid",
    maskImage:
      "radial-gradient(300px 300px, rgba(0,0,0,1), rgba(0,0,0,0.4), transparent)",
    maskRepeat: "no-repeat",
  },
  (props) => ({
    gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
  })
);

function Grid() {
  const [countSize, setCountSize] = useState<SizeProps>({
    rows: 0,
    columns: 0,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const centerMouseX = useTransform<number, number>(
    mouseX,
    (newX) => newX - window.innerWidth / 2
  );

  const centerMouseY = useTransform<number, number>(
    mouseY,
    (newY) => newY - window.innerHeight / 2
  );

  const WebkitMaskPosition = useMotionTemplate`${centerMouseX}px ${centerMouseY}px`;

  //   eased mouse position
  const mouseXEased = useMotionValue(0);
  const mouseYEased = useMotionValue(0);
  // mouse velocity
  const mouseXVelocity = useVelocity(mouseXEased);
  const mouseYVelocity = useVelocity(mouseYEased);
  const mouseVelocity = useTransform<number, number>(
    [mouseXVelocity, mouseYVelocity],
    ([latestX, latestY]) => Math.abs(latestX) + Math.abs(latestY)
  );
  //   map mouse velocity to an opacity value
  const opacity = useTransform(mouseVelocity, [0, 1000], [0, 1]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      animate(mouseX, event.clientX);
      animate(mouseY, event.clientY);

      const transition: AnimationOptions<number> = {
        ease: "easeOut",
        duration: 1.5,
      };
      animate(mouseXEased, event.clientX, transition);
      animate(mouseYEased, event.clientY, transition);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => removeEventListener("mousemove", handleMouseMove);
  }, []);

  //   determine rows and columns
  useEffect(() => {
    const calculateGrid = () => {
      const columnCount = Math.ceil(window.innerWidth / CELL_SIZE);
      const rowCount = Math.ceil(window.innerHeight / CELL_SIZE);
      setCountSize({
        rows: rowCount,
        columns: columnCount,
      });
      console.log("effect running");
    };

    // set Grid size on load
    calculateGrid();

    // recalculate grid on resize
    window.addEventListener("resize", calculateGrid);

    // cleanup (remove EventListener)
    return () => {
      window.removeEventListener("resize", calculateGrid);
    };
  }, []);

  return (
    <Container
      columns={countSize.columns}
      style={{ WebkitMaskPosition, opacity }}
    >
      {Array.from({ length: countSize.columns * countSize.rows }).map(
        (_, i) => (
          <Cell key={i} mouseX={mouseX} mouseY={mouseY} />
        )
      )}
    </Container>
  );
}

export default Grid;

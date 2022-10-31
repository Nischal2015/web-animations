import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { textEllipsis } from "../../utils";
import { Avatar, StarRating } from "../ui";

type validStartCount = 0 | 1 | 2 | 3 | 4 | 5;

type CardProps = {
  imageUrl?: string;
  text?: string;
  name?: string;
  country?: string;
};

const ReviewContainer = styled(motion.div)(
  {
    width: "358px",
    border: "2px solid #ffffff33",
  },
  (props) => ({
    borderRadius: props.theme.borderRadius.larger,
  })
);

const ReviewBody = styled.div({
  padding: "6rem 4rem 9rem",
  "& > *:first-of-type": {
    marginBottom: "5rem",
  },
  "& > *:nth-of-type(3)": {
    marginTop: "3rem",
  },
});

const ReviewItemContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

const Text = styled(motion.div)<Pick<CardProps, "text"> & { color?: string }>(
  {
    display: "inline-block",
    fontSize: "1.8rem",
    color: "#fff",
    lineHeight: "30px",
    fontWeight: 500,
  },
  (props) =>
    props?.color === "primary" ? { color: props.theme.colors.primary } : {}
);

export default function Card({
  imageUrl,
  text = "",
  name,
  country,
}: CardProps) {
  const randomStar = () => Math.round(Math.random() * 5) as validStartCount;
  const cardText = textEllipsis(text);
  const $root = document.getElementById("root") as HTMLElement;

  return (
    <ReviewContainer
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
        transition: { duration: 0.25, ease: "easeInOut" },
      }}
    >
      <ReviewBody>
        <Avatar imageUrl={imageUrl} country={country} name={name} />
        <ReviewItemContainer>
          <StarRating starCount={randomStar()} />
          <Text>{cardText}</Text>
        </ReviewItemContainer>
        {text.length !== cardText.length && (
          <Text
            color='primary'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
          >
            Read Full Review
          </Text>
        )}
      </ReviewBody>
    </ReviewContainer>
  );
}

import star from "../../assets/review/star.svg";
import noStar from "../../assets/review/no-star.svg";
import styled from "@emotion/styled";

type StarRatingProps = {
  starCount?: 0 | 1 | 2 | 3 | 4 | 5;
};

const StarContainer = styled.div({
  display: "inline-flex",
  alignContent: "center",
  gap: "1.2rem",
  "& span": {
    height: "2.8rem",
    width: "2.8rem",
    display: "inline-block",
    "& > img": {
      height: "100%",
      width: "100%",
    },
  },
});

function StarRating({ starCount = 0 }: StarRatingProps) {
  const countArray = [1, 2, 3, 4, 5];
  return (
    <StarContainer>
      {countArray.map((count) => {
        const reviewStar = count <= starCount ? star : noStar;
        return (
          <span key={count}>
            <img src={reviewStar} alt='review' />
          </span>
        );
      })}
    </StarContainer>
  );
}

export default StarRating;

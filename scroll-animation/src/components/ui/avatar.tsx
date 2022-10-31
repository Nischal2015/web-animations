import styled from "@emotion/styled";
import dummyAvatar from "../../assets/review/avatar-9.avif";

type AvatarProps = {
  imageUrl?: string;
  name?: string;
  country?: string;
};

const AvatarContainer = styled.div(
  {
    display: "inline-flex",
    alignItems: "center",
  },
  (props) => ({
    gap: props.theme.spacing.default,
  })
);

const ImageSpan = styled.span({
  height: "5.2rem",
  width: "5.2rem",
  display: "inline-block",
  borderRadius: "50%",
  overflow: "hidden",
  "& img": {
    height: "100%",
    width: "100%",
  },
});

const ContentDiv = styled.div({
  display: "inline-flex",
  flexDirection: "column",
});

const Text = styled.span({
  display: "inline-block",
  fontSize: "1.8rem",
  color: "#fff",
  opacity: 0.5,
  lineHeight: "2.2rem",
  "&:first-of-type": {
    opacity: 1,
    marginBottom: "4px",
    fontWeight: 500,
  },
});

export default function Avatar({
  imageUrl = dummyAvatar,
  name = "John Doe",
  country = "Nepal",
}: AvatarProps) {
  return (
    <AvatarContainer>
      <ImageSpan>
        <img src={imageUrl} alt='avatar' />
      </ImageSpan>
      <ContentDiv>
        <Text>{name}</Text>
        <Text>{country}</Text>
      </ContentDiv>
    </AvatarContainer>
  );
}

import React from "react";
import { Card } from "semantic-ui-react";
import NoImage from "../../assets/NoImage.png";
import { NewsCard } from "./styles";

const ImageCard = ({ src, header, meta, onClick }) => {
  return (
    <NewsCard onClick={onClick}>
      <img src={src ? src : NoImage} width={200} height={200} alt={header} />
      <Card.Content>
        <Card.Header>
          {header.length > 200 ? header.substring(0, 200) : header}
          {header.length > 200 && "..."}
        </Card.Header>
        <Card.Meta style={{ fontWeight: 500, marginTop: 6 }}>{meta}</Card.Meta>
      </Card.Content>
    </NewsCard>
  );
};
export default ImageCard;

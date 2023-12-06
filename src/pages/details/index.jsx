import React from "react";
import { useSelector } from "react-redux";
import { Col, DetailText, ImageFrame, Row, Title, Wrapper } from "./styles";
import NoImage from "../../assets/NoImage.png";

const Details = () => {
  const { clickedNew } = useSelector((state) => state.news);

  return (
    <Wrapper>
      <Title>{clickedNew?.Title}</Title>
      <Row>
        <ImageFrame
          src={clickedNew?.urlToImage ? clickedNew?.urlToImage : NoImage}
          alt="pictureOfNew"
        />
        <Col>
          {
            <Row>
              <DetailText>
                {clickedNew?.headline
                  ? clickedNew?.headline?.main
                  : clickedNew?.sectionName
                  ? clickedNew?.sectionName
                  : ""}
              </DetailText>
            </Row>
          }
          <Row>
            <DetailText>
              {clickedNew?.abstract
                ? clickedNew?.abstract
                : clickedNew?.description
                ? clickedNew?.description
                : clickedNew?.webTitle}
            </DetailText>
          </Row>
          <Row>
            <DetailText>
              {clickedNew?.lead_paragraph
                ? clickedNew?.lead_paragraph
                : clickedNew?.content
                ? clickedNew?.content
                : ""}
            </DetailText>
          </Row>
          {(clickedNew?.web_url || clickedNew?.url || clickedNew?.webUrl) && (
            <Row>
              <DetailText
                onClick={() =>
                  window.open(
                    clickedNew?.web_url
                      ? clickedNew.web_url
                      : clickedNew?.url
                      ? clickedNew?.url
                      : clickedNew?.webUrl
                  )
                }
                style={{ cursor: "pointer", color: "blue !important" }}
              >
                Full content is available here:{" "}
                {clickedNew?.web_url
                  ? clickedNew?.web_url
                  : clickedNew?.url
                  ? clickedNew?.url
                  : clickedNew?.webUrl}
              </DetailText>
            </Row>
          )}

          <Row>
            <DetailText>
              Author:{" "}
              {clickedNew?.byline
                ? clickedNew?.byline?.original?.split("By ")[1]
                : clickedNew?.source?.name
                ? clickedNew?.source?.name
                : "The Guardian"}
            </DetailText>
          </Row>
          <Row>
            <DetailText>
              Published at:{" "}
              {clickedNew?.pub_date
                ? new Date(clickedNew?.pub_date).toDateString()
                : clickedNew?.publishedAt
                ? new Date(clickedNew?.publishedAt).toDateString()
                : new Date(clickedNew?.webPublicationDate).toDateString()}
            </DetailText>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Details;

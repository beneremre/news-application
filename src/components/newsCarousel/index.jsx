import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
import { useSelector } from "react-redux";
import ImageCard from "../newsCard";
import store from "../../redux/store";

function NewsCarousel() {
  const navigate = useNavigate();
  const { news, currentPage, chosenAuthor } = useSelector(
    (state) => state.news
  );
  let activeNews = news;

  if (chosenAuthor?.length > 0) {
    let filteredItems = activeNews.filter(
      (item) => item.author === chosenAuthor
    );
    activeNews = filteredItems;
  }
  return (
    <>
      <Wrapper>
        {activeNews
          ?.slice(0 + (currentPage - 1) * 10, 5 + (currentPage - 1) * 10)
          .map((item, index) => {
            return (
              <ImageCard
                src={item.urlToImage && item.urlToImage}
                header={
                  item.title
                    ? item.title
                    : item.webTitle
                    ? item.webTitle
                    : item.abstract
                }
                meta={item.author}
                onClick={async () => {
                  store.dispatch.news.SET_CLICKED_NEWS(item);
                  navigate("/details");
                }}
              />
            );
          })}
      </Wrapper>
      <Wrapper>
        {activeNews.length > 5 &&
          news
            ?.slice(5 + (currentPage - 1) * 10, 10 + (currentPage - 1) * 10)
            .map((item, index) => {
              return (
                <ImageCard
                  src={item.urlToImage && item.urlToImage}
                  header={
                    item.title
                      ? item.title
                      : item.webTitle
                      ? item.webTitle
                      : item.abstract
                  }
                  meta={item.author}
                  onClick={async () => {
                    store.dispatch.news.SET_CLICKED_NEWS(item);
                    navigate("/details");
                  }}
                />
              );
            })}
      </Wrapper>
    </>
  );
}

export default NewsCarousel;

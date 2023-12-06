import React from "react";
import { useSelector } from "react-redux";
import { NoDataText, Wrapper } from "./styles";
import { useEffect } from "react";
import store from "../../redux/store";
import NewsCarousel from "../../components/newsCarousel";
import Filter from "../../components/filter";
import Pagination from "../../components/pagination";

const News = () => {
  const { searchString, filterType, news, source, currentPage } = useSelector(
    (state) => state.news
  );

  //reload the data when the parameters changes
  useEffect(() => {
    if (searchString.length === 0 && source === "NewsAPI") {
      alert("This API doesn't allow empty searches!");
    } else {
      store.dispatch.news.getNews({
        searchString,
        filterType,
        source,
      });
    }
  }, [searchString, filterType, source, currentPage]);

  return (
    <Wrapper>
      <Filter />
      {news.length > 0 ? (
        <>
          <NewsCarousel />
          <Pagination />
        </>
      ) : (
        <NoDataText>No such result </NoDataText>
      )}
    </Wrapper>
  );
};

export default News;

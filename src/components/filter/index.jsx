import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import store from "../../redux/store";
import {
  ClearFilterButton,
  FilterText,
  FilterWrapper,
  Options,
  SearchButton,
  SearchInput,
  TypeSelect,
} from "./styles";
import {
  sourceChoices,
  sortingChoicesNews,
  sortingChoicesGuardianNYT,
} from "../../constants/constant";

function Filter() {
  const { searchString, filterType, authors, chosenAuthor, source } =
    useSelector((state) => state.news);

  const [searchPhrase, setSearchPhrase] = useState(searchString);

  return (
    <FilterWrapper>
      <Grid columns={3} className="grid-wrapper">
        <Grid.Column className="filter-grid">
          <FilterText style={{ marginLeft: 0 }}>Search</FilterText>
          <SearchInput
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
          />
        </Grid.Column>
        <Grid.Column className="filter-grid">
          <FilterText>Source </FilterText>
          <TypeSelect
            value={source}
            onChange={async (e) => {
              if (
                searchPhrase.length === 0 &&
                searchString.length === 0 &&
                e.target.value === "NewsAPI"
              ) {
                alert(
                  "This API doesn't allow empty searches! To switch this source, please enter a keyword to search..."
                );
              } else {
                if (searchPhrase.length > 0)
                  store.dispatch.news.SET_SEARCH_STR(searchPhrase);
                store.dispatch.news.SET_SOURCE(e.target.value);
              }
            }}
          >
            {sourceChoices.map((item, index) => {
              return <Options value={item.value}>{item.text}</Options>;
            })}
          </TypeSelect>
        </Grid.Column>
        <Grid.Column className="filter-grid">
          <FilterText>Sort By </FilterText>
          <TypeSelect
            value={filterType}
            onChange={(e) => {
              store.dispatch.news.SET_FILTER_TYPE(e.target.value);
              store.dispatch.news.SET_CURR_PAGE(1);
            }}
          >
            {source === "NewsAPI"
              ? sortingChoicesNews.map((item, index) => {
                  return <Options value={item.value}>{item.text}</Options>;
                })
              : sortingChoicesGuardianNYT.map((item, index) => {
                  return <Options value={item.value}>{item.text}</Options>;
                })}
          </TypeSelect>
        </Grid.Column>
        {source === "NewsAPI" && (
          <Grid.Column className="filter-grid">
            <FilterText>Authors </FilterText>
            <TypeSelect
              value={chosenAuthor}
              onChange={(e) => store.dispatch.news.SET_AUTHOR(e.target.value)}
              style={{}}
            >
              {Array.from(authors).map((item, index) => {
                return <Options value={item}>{item}</Options>;
              })}
            </TypeSelect>
          </Grid.Column>
        )}
        <Grid.Column className="filter-grid">
          <SearchButton
            onClick={() => {
              if (searchPhrase.length === 0 && source === "NewsAPI") {
                alert("This API doesn't allow empty searches!");
              } else {
                if (searchPhrase.length > 0) {
                  store.dispatch.news.SET_SEARCH_STR(searchPhrase);
                  store.dispatch.news.SET_FILTER_TYPE(
                    source === "NewsAPI" ? "relevancy" : "relevance"
                  );
                } else {
                  store.dispatch.news.SET_FILTER_TYPE("relevance");
                }
              }
            }}
          >
            Search
          </SearchButton>
        </Grid.Column>
        <Grid.Column className="filter-grid">
          <ClearFilterButton
            onClick={() => {
              store.dispatch.news.SET_FILTER_TYPE(
                source === "NewsAPI" ? "publishedAt" : "newest"
              );
              store.dispatch.news.SET_AUTHOR("");
            }}
          >
            Clear Filter
          </ClearFilterButton>
        </Grid.Column>
      </Grid>
    </FilterWrapper>
  );
}

export default Filter;

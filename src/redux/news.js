import axios from "axios";
import {
  NEWS_API,
  NEWS_API_KEY,
  GUARDIAN_API,
  GUARDIAN_API_KEY,
  NYT_API,
  NYT_API_KEY,
} from "../constants/config";
const news = {
  state: {
    news: [],
    clickedNew: {},
    searchString: "",
    filterType: "newest",
    source: "GuardianAPI",
    authors: [],
    chosenAuthor: "",
    pageCount: 1,
    currentPage: 1,
  },

  reducers: {
    SET_NEWS(state, payload) {
      return { ...state, news: payload };
    },
    SET_CLICKED_NEWS(state, payload) {
      return { ...state, clickedNew: payload };
    },
    SET_SEARCH_STR(state, payload) {
      return { ...state, searchString: payload };
    },
    SET_FILTER_TYPE(state, payload) {
      return { ...state, filterType: payload };
    },
    SET_SOURCE(state, payload) {
      return { ...state, source: payload };
    },
    SET_AUTHORS(state, payload) {
      return { ...state, authors: payload };
    },
    SET_AUTHOR(state, payload) {
      return { ...state, chosenAuthor: payload };
    },
    SET_CURR_PAGE(state, payload) {
      return { ...state, currentPage: payload };
    },
    SET_PAGE_COUNT(state, payload) {
      return { ...state, pageCount: payload };
    },
  },

  effects: (dispatch) => ({
    async getNews({ searchString, filterType, source }) {
      try {
        let response = null;
        if (source === "NewsAPI") {
          response = await axios.get(
            `${NEWS_API}q=${searchString}&sortBy=${filterType}&apiKey=${NEWS_API_KEY}`
          );
          this.SET_NEWS(response.data.articles);
          this.SET_PAGE_COUNT(Math.ceil(response.data.articles.length / 10));

          let authorsArray = [];
          let authorNames = new Set();
          authorNames = response.data.articles.reduce(
            (accumulator, currentValue) => authorNames.add(currentValue.author),
            authorsArray
          );
          this.SET_AUTHORS(authorNames);
        } else if (source === "GuardianAPI") {
          let url = null;
          if (searchString.length > 0 && filterType.length > 0) {
            url = `${GUARDIAN_API}search?q=${searchString}&order-by=${filterType}&api-key=${GUARDIAN_API_KEY}`;
          } else {
            url = `${GUARDIAN_API}search?order-by=${filterType}&api-key=${GUARDIAN_API_KEY}`;
          }
          response = await axios.get(url);
          this.SET_NEWS(response.data.response.results);
          this.SET_PAGE_COUNT(
            Math.ceil(response.data.response.results.length / 10)
          );
        } else if (source === "NYTAPI") {
          response = await axios.get(
            `${NYT_API}q=${searchString}&sort=${filterType}&api-key=${NYT_API_KEY}`
          );
          this.SET_NEWS(response.data.response.docs);
          this.SET_PAGE_COUNT(
            Math.ceil(response.data.response.docs.length / 10)
          );
        }
      } catch (error) {
        // alert(error);
      }
    },
  }),
};

export default news;

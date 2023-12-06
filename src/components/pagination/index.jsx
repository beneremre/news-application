import React from "react";
import {
  PaginationButton,
  PaginationRow,
  PaginationText,
  SelectPage,
} from "./styles";
import { useSelector } from "react-redux";
import store from "../../redux/store";

function Pagination() {
  const { pageCount, currentPage } = useSelector((state) => state.news);
  return (
    <PaginationRow>
      <PaginationButton
        onClick={() =>
          store.dispatch.news.SET_CURR_PAGE(Number(currentPage) - 1)
        }
        disabled={currentPage === 1}
      >
        {"<"}
      </PaginationButton>
      <PaginationButton
        onClick={() =>
          store.dispatch.news.SET_CURR_PAGE(Number(currentPage) + 1)
        }
        disabled={currentPage === pageCount}
      >
        {">"}
      </PaginationButton>
      <PaginationText>
        Page {currentPage} of {pageCount} /
      </PaginationText>
      <PaginationText>Go to page</PaginationText>
      <SelectPage
        style={{ width: 45 }}
        onChange={(e) => store.dispatch.news.SET_CURR_PAGE(e.target.value)}
        value={currentPage}
      >
        {[...Array(pageCount)]?.map((item, index) => {
          return (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          );
        })}
      </SelectPage>
    </PaginationRow>
  );
}

export default Pagination;

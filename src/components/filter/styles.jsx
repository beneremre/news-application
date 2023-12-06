import styled from "styled-components";
import { Input } from "semantic-ui-react";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`;
export const FilterText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600 !important;
  color: #000050;
  margin-left: 16px;
  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const TypeSelect = styled.select`
  font-family: Poppins;
  font-size: 14px;
  margin-right: 16px;
  border: 1px solid white;
  max-width: 200px;
  @media (max-width: 600px) {
    max-width: 150px;
    margin-right: 0px;
  }
`;

export const Options = styled.option``;

export const SearchInput = styled(Input)`
  font-family: Poppins;
  ::-webkit-input-placeholder {
    font-family: Poppins;
  }
  border: none;
`;
export const NumberInput = styled.input`
  width: 100px;
  ::-webkit-input-placeholder {
    font-family: Poppins;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const ClearFilterButton = styled.button`
  background-color: red;
  color: white;
  border-color: red;
  cursor: pointer;
  width: 150px;
  font-family: Poppins;
  font-weight: 500 !important;
  border-radius: 2px !important;
`;

export const SearchButton = styled.button`
  background-color: white;
  color: black;
  border-color: white;
  cursor: pointer;
  width: 150px;
  font-family: Poppins;
  font-weight: 500 !important;
  border-radius: 2px !important;
  margin-right: 10px;
  @media (max-width: 600px) {
    margin-right: 0px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

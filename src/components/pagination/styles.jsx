import styled from "styled-components";
import { Input } from "semantic-ui-react";

export const PaginationButton = styled.button`
  height: 20px;
`;
export const PaginationRow = styled.div`
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  align-self: center;
  bottom: 0;
  @media (max-width: 600px) {
    position: relative;
    margin-left: 70px;
  }
`;
export const PaginationText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  margin-left: 5px;
  margin-right: 2px;
`;
export const PageInput = styled(Input)`
  font-family: Poppins;
  ::-webkit-input-placeholder {
    font-family: Poppins;
  }
`;
export const SelectPage = styled.select`
  font-family: Poppins;
  ::-webkit-input-placeholder {
    font-family: Poppins;
  }
  margin-left: 8px;
`;

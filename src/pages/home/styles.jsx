import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: inherit;
  }
`;
export const NoDataText = styled.p`
  margin-top: 20%;
  font-family: Poppins;
  text-align: center;
  font-size: 20px;
`;

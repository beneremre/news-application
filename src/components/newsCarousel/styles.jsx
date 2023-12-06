import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  height: 400px;
  @media (max-width: 600px) {
    flex-direction: column;
    height: 1500px;
    margin-bottom: 400px;
  }
`;

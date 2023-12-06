import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 50px 100px 50px 100px;
  @media (max-width: 600px) {
    padding: 0px 20px 30px 50px;
    display: flex;
    flex-direction: column;
  }
`;
export const Title = styled.p`
  font-family: Poppins;
  font-size: 24px;
  display: flex;
  justify-content: center;
`;
export const DetailText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;
export const LabelText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    display: block;
  }
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;
export const NoPosterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 40%;
`;
export const ImageFrame = styled.img`
  height: 450px;
  width: 550px;
  @media (max-width: 600px) {
    height: 225px;
    width: 275px;
  }
,`;

import styled from "styled-components";
import { Card } from "semantic-ui-react";

export const NewsCard = styled(Card)({
  width: "200px",
  height: "200px",
  fontFamily: "Poppins",
  color: "#000050!important",
  fontStyle: "normal",
  fontWeight: "600 !important",
  fontSize: "14px",
  textAlign: "center",
  cursor: "pointer",
  "@media (max-width: 600px)": {
    marginTop: "80px",
    alignSelf: "center",
  },
});

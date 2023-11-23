import styled from "styled-components";

export const Money = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
  color: ${(props) =>
    props.type === "plus"
      ? "#2ecc71"
      : props.type === "minus"
      ? "#c0392b"
      : "inherit"};
`;

import styled from "styled-components";

export const UIList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
`;

export const UIListItem = styled.li`
  text-transform: capitalize;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;

  border-right: ${(props) =>
    props.type === "plus"
      ? "5px solid #2ecc71"
      : props.type === "minus"
      ? "5px solid #c0392b"
      : "none"};
`;

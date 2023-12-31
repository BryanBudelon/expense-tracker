import styled from "styled-components";

export const UIIncExpView = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  > div {
    flex: 1;
    text-align: center;
    padding: 0 20px;

    &:first-of-type {
      border-right: 1px solid #dedede;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 2em 2em;
  }
`;

import styled from "styled-components";

export const UIInput = styled.input`
  -moz-appearance: textfield;
  appearance: textfield;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 5px;
  width: 30em;
  border: none;
  border-bottom: 1px solid #dedede;
  outline: none;
  background-color: #f7f7f7;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;

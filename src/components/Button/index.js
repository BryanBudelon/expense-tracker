import { styled } from "styled-components";

export const UIButton = styled.button`
  display: inline-block;
  border: 0;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 20px;
  color: white;
  box-shadow: var(--box-shadow);
  width: 45%;
  margin: 0.5em;
  height: 3em;
  @media only screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
    padding: 0.5em 0;
  }
`;

export const IncomeButton = styled(UIButton)`
  background: #2ecc71;
`;

export const ExpenseButton = styled(UIButton)`
  background: #c0392b;
`;

export const DeleteButton = styled.button`
  background: #e74c3c;
  cursor: pointer;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const AddButton = styled(UIButton)`
  background: purple;
  width: 20em;
  height: 2em;
  margin: 2em;
`;

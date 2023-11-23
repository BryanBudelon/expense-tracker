import styled from "styled-components";

export const UIIncText = styled.div``;

export function UIIncomeText(title, children) {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

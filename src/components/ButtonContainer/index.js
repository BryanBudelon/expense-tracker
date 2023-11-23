import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // Adjust as needed
  align-items: center;
  gap: 10px; // Space between buttons

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px; // Increase gap for smaller screens
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme["gray-800"]};

  span {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

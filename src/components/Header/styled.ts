import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 5rem;
  background: ${(props) => props.theme["gray-800"]};

  a {
    font-size: 1.4rem;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme["gray-100"]};
    transition: filter 0.2s;

    :focus {
      box-shadow: none;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;
  padding: 2rem 6rem;
  background: ${(props) => props.theme["gray-900"]};
`;

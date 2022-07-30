import styled from 'styled-components';

export const Container = styled.div`
  color: black;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  padding: .5em;
  gap: 3em;
  border-radius: 10px;
  margin: 0 .5em .7em;
  transition: 500ms;
  cursor: pointer;

  svg {
    margin: 0 .5em;
  }

  &:hover {
    background-color: #355764;
    color: white;
    svg {
      color: white
    }
  }
`;

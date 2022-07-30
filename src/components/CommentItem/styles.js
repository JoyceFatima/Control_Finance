import styled from 'styled-components';

export const Container = styled.li`
  width: 98%;
  max-width: 1120px;
  margin: 1em auto;
  padding: .5em .8em;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 6px 5px 10px 0px grey;
  gap: 1em;
  background-color: #d4d2d4;
`;

export const Input = styled.input`
  width: 98%;
  max-width: 950px;
  font-size: 18px;
  padding: .5em ;
  border-radius: 10px;
  border: none;
  background-color: #d4d2d4;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Group = styled.div`

svg {
    padding: 0 .5em;
    width: 20px;
    height: 20px;
  }
`;

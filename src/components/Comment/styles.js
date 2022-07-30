import styled from 'styled-components';

export const Container = styled.form`
  width: 98%;
  max-width: 1120px;
  margin: 1em auto;
  padding: .5em .8em;
  border-radius: 10px;
  display: flex;
  box-shadow: 6px 5px 10px 0px;
  justify-content: space-around;
  gap: 1em;
  background-color: #d4d2d4;

`;

export const Input = styled.input`
  width: 98%;
  max-width: 1120px;
  font-size: 18px;
  padding: .5em .8em;
  border-radius: 10px;
  border: none;

  &:focus {
      outline: none; // add this
    }
`;

export const Button = styled.button`
  padding: 0em 1em;
  background-color: teal;
  border-radius: 8px;
  border: none;
`;

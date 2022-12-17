import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  max-width: 1120px;
  margin: 1em auto;
  padding: .5em 0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
  display: flex;
  justify-content: space-around;
  gap: 1em;

  @media (max-width: 950px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: .3em .6em;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 1.5em;
    margin-right: .3em;
    accent-color: black;
  }
`;

export const Button = styled.button`
  border: none;
  padding: .3em .6em;
  border-radius: 5px;
  color: white;
  background-color: teal;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  max-width: 1120px;
  margin: 1em auto;
  border-radius: 5px;

  @media (max-width: 775px){
    input {
      width: 70%;
    }

    p {
      font-size: x-large;
    }
  }
`;

export const SubTitle = styled.h2`
  align-items: center;
  text-align: center;
`;

export const Group = styled.div`
  display: flex;
  padding: 0 1em;
  justify-content: center;
  border-bottom: 1px solid black;

  svg {
    width: 20px;
    height: 20px;
  }
`;

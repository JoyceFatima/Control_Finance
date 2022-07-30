import styled from 'styled-components';

export const Table = styled.table`
  width: 98%;
  max-width: 1120px;
  margin: 1em auto;
  padding: .5em;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: .2em;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width + '%' : 'auto')}
`;

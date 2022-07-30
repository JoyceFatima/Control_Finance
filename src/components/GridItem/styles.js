import styled from 'styled-components';

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 1em;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  word-break: break-all;

  svg {
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
`;

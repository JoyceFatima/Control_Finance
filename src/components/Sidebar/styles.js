import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  position: fixed;
  height: 100%;
  width: 300px;
  left: ${(props) => (props.sidebar ? '0' : '-100')};
  animation: showSidebar .4s;

  #FaTimes{
    margin-top: 1em;
  }

  svg {
    margin: 0 .5em;
    position: fixed;
    color: black;
    width: 30px;
    height: 30px;
  }

  @keyframes showwSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 3em;
`;

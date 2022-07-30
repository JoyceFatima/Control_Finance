/* eslint-disable react/prop-types */
import * as C from './styles';

export const SidebarItem = ({ Icon, Text }) => {
  return (
    <C.Container>
      <div>
        <Icon />
      </div>
      <div>{Text}</div>
    </C.Container>
  );
};

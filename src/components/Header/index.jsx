import React, { useState } from 'react';

import * as C from './styles';
import { FaBars } from 'react-icons/fa';
import { Sidebar } from '../Sidebar';

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <C.Container>
      <C.Header>
        <C.SideBar>
          <FaBars onClick={showSidebar} />
          {sidebar && <Sidebar active={setSidebar} showSidebar={showSidebar} />}
        </C.SideBar>
        <C.Title>Controle Financeiro</C.Title>
      </C.Header>
    </C.Container>
  );
};

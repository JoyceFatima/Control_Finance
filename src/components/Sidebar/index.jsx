/* eslint-disable react/prop-types */
import * as C from './styles';
import {
  FaTimes,
  FaHome,
  FaRegSun,
  FaRegFileAlt,
  FaChartBar,
} from 'react-icons/fa';

import { SidebarItem } from '../SidebarItem';
import { Link } from 'react-router-dom';

export const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <C.Container sidebar={active}>
      <FaTimes id="FaTimes" onClick={closeSidebar} />
      <C.Content>
        <Link to="/">
          <SidebarItem Icon={FaHome} Text="Home" />
        </Link>
        <Link to="/to-do">
          <SidebarItem Icon={FaRegFileAlt} Text="To-do List" />
        </Link>
        <Link to="/statistics">
          <SidebarItem Icon={FaChartBar} Text="Statistics" />
        </Link>
        <Link to="/settings">
          <SidebarItem Icon={FaRegSun} Text="Settings" />
        </Link>
      </C.Content>
    </C.Container>
  );
};

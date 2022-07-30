/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import * as C from './styles';

export const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};

ResumeItem.PropTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

/* eslint-disable react/prop-types */
import * as C from './styles';
import PropTypes from 'prop-types';
import { ResumeItem } from '../ResumeItem';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

export const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

Resume.PropTypes = {
  income: PropTypes.number.isRequired,
  expense: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

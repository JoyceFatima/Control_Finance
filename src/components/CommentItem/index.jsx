/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as C from './styles';
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { element } from 'prop-types';

export const CommentItem = ({ all, setAll, setEditAll }) => {
  const onComplete = (al) => {
    setAll(
      all.map((item) => {
        if (item.id === al.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  };

  const onEdit = (id) => {
    const findAll = all.find((al) => al.id === id);
    setEditAll(findAll);
  };

  const onDelete = (id) => {
    all.filter((al) => al.id !== id);
  };

  return (
    <>
      {all.map((al) => (
        <C.Container key={al.id}>
          <C.Input
            type="text"
            value={al.title}
            onChange={(event) => event.preventDefault()}
          />
          <C.Group>
            <BsFillCheckCircleFill
              color="#355764"
              onClick={() => onComplete(al)}
            />
            <FiEdit color="#e48653" onClick={() => onEdit(al)} />
            <FaTrash color="#EB4747" onClick={() => onDelete(al)} />
          </C.Group>
        </C.Container>
      ))}
    </>
  );
};

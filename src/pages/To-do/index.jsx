import * as C from './styles';
import { Comment } from '../../components/Comment';
import { useState } from 'react';

export const TodoList = () => {
  // const initialState = JSON.parse(localStorage.getItem('all')) || [];
  const [input, setInput] = useState('');
  const [all, setAll] = useState([]);
  const [editAll, setEditAll] = useState(null);

  /*  useEffect(() => {
    localStorage.setItem('all', JSON.stringify(all));
  }, [all]); */

  return (
    <C.Container>
      <C.Group>
        <C.SubTitle>To-Do List</C.SubTitle>
      </C.Group>
      <Comment
        input={input}
        setInput={setInput}
        all={all}
        setAll={setAll}
        editAll={editAll}
        setEditAll={setEditAll}
      />
    </C.Container>
  );
};

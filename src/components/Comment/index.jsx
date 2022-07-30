/* eslint-disable react/prop-types */
import * as C from './styles';
import { v4 as uuidv4 } from 'uuid';
import { CommentItem } from '../CommentItem';
import { useEffect } from 'react';

export const Comment = ({
  input,
  setInput,
  all,
  setAll,
  editAll,
  setEditAll,
}) => {
  const uptadeAll = (title, id, completed) => {
    const newAll = all.map((al) =>
      al.id === id ? { title, id, completed } : al,
    );
    setAll(newAll);
    setEditAll('');
  };

  useEffect(() => {
    if (editAll) {
      setInput(editAll.title);
    } else {
      setInput('');
    }
  }, [setInput, editAll]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = () => {
    event.preventDefault();
    if (!editAll) {
      setAll([...all, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      uptadeAll(input, editAll.id, editAll.completed);
    }
  };

  return (
    <>
      <C.Container onSubmit={onFormSubmit}>
        <C.Input
          type="text"
          placeholder="Enter a Todo"
          value={input}
          onChange={onInputChange}
          required
        />
        <C.Button type="submit">{editAll ? 'OK' : 'ADD'}</C.Button>
      </C.Container>
      <CommentItem
        all={all}
        setAll={setAll}
        editAll={editAll}
        setEditAll={setEditAll}
      />

      {/* {all.map((al) => {
        return (
          <div key={al.id}>
            <li>{al.title}</li>
          </div>
        );
      })} */}
    </>
  );
};

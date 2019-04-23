import React from 'react';
import { connect } from 'react-redux';
import { postTodo } from '../state/actions';

const AddTodo = ({ dispatch }) => {
  let input;
  let textarea;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(postTodo(input.value, textarea.value));
        input.value = '';
        textarea.value = '';
      }}
    >
      <input ref={node => (input = node)} />
      <textarea ref={node => (textarea = node)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect()(AddTodo);

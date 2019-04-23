import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { deleteTodo } from '../state/actions';

const Todo = ({
  id,
  title,
  description,
  dispatch,
}) => (
  <>
    <h2>{title}</h2>
    <p>{description}</p>
    <Link to={`/todo/${id}`}>Edit task</Link>
    <button onClick={() => dispatch(deleteTodo(id))}>Delete Task</button>
  </>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default connect()(Todo);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  requestTodo,
  putTodo,
  changeTitleTodo,
  changeDescriptionTodo,
} from '../state/actions';
import { Link } from '@reach/router';

class EditTodo extends React.Component{
  componentDidMount() {
    const { requestTodo, id } = this.props;
    requestTodo(id);
  }

  render() {
    const {
      id,
      title,
      description,
      putTodo,
      changeTitleTodo,
      changeDescriptionTodo,
    } = this.props;
    return (
      <>
        <Link to="/">Home</Link>
        <form
          onSubmit={e => {
            e.preventDefault();
            putTodo(id, title, description);
          }}
        >
          <input value={title} onChange={e => changeTitleTodo(e.target.value)} />
          <textarea value={description} onChange={e => changeDescriptionTodo(e.target.value)} />
          <button type="submit">Save task</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  title: state.todo.title,
  description: state.todo.description,
});

const mapDispatchToProps = dispatch => ({
  requestTodo: (id) => dispatch(requestTodo(id)),
  putTodo: (id, title, description) => dispatch(putTodo(id, title, description)),
  changeTitleTodo: title => dispatch(changeTitleTodo(title)),
  changeDescriptionTodo: description => dispatch(changeDescriptionTodo(description)),
});

EditTodo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);

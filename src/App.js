import React from 'react';
import { connect } from 'react-redux';
import { requestTodos } from "./state/actions";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <>
        <AddTodo />
        <TodoList todos={todos}/>
      </>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(requestTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

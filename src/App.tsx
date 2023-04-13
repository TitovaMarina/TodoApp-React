import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TodoList } from './components/Todos/TodoList';
import { TodoPanel } from './components/Todos/TodoPanel';
import { Wrapper } from './components/Wrapper/Wrapper';
import * as helpers from './data/helpers';

export const App: React.FC = () => {
  const [todos, setTodos] = helpers.useLocalStorage<Todo[]>('dataLocalStorage');
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);

  const selectTodoIdForEdit = (id: number) => setTodoIdForEdit(id);
  const addTodo = (title: string) => {
    if (!title) {
      alert('Please enter Todo task name first.');
      return;
    }
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    setTodos([...todos, { id, title, checked: false }]);
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const editTodo = (title: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, title };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  return (
    <div className="App">
      <Header todoCount={todos.length} />
      <Wrapper color="blue" direction="row">
        <TodoPanel mode="add" onClick={addTodo} todoTitle="" />
      </Wrapper>
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          todoIdForEdit={todoIdForEdit}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          changeTodo={editTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
        />
      ) : (
        <Wrapper color="green" direction="column">
          You have no tasks.
        </Wrapper>
      )}
    </div>
  );
};

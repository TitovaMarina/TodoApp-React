import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { TodoList } from './components/Todos/TodoList';
import { TodoPanel } from './components/Todos/TodoPanel';
import { Wrapper } from './components/Wrapper/Wrapper';

const DEFAULT_TODOS = [{
  id: 1,
  title: 'Write React app',
  checked: false
}]

export const App: React.FC = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODOS);
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);

  //for debug
  React.useEffect(() => {    
    console.log('todos=',todos);
  }, [todos]);

  const selectTodoIdForEdit = (id: number) => {
    setTodoIdForEdit(id);
  }

  const addTodo = (title: string) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, title: title, checked: false }]);
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const checkTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => {
      if (todo.id === id){
        return { ...todo, checked: !todo.checked};
      }
      return todo;
    }));
  }

  const editTodo = (title: string) => {        
    setTodos(todos.map(todo => {
      if (todo.id === todoIdForEdit){
        return { ...todo, title};
      }
      return todo;
    }));
    setTodoIdForEdit(null);
  }

  return (
    <div className="App">
      <Header todoCount={todos.length}/>
      <Wrapper color="blue" direction="row">
        <TodoPanel mode="add" onClick={addTodo} todoTitle=""/>
      </Wrapper>
      <TodoList 
        todos={todos} 
        todoIdForEdit = {todoIdForEdit}
        checkTodo={checkTodo} 
        deleteTodo={deleteTodo} 
        changeTodo={editTodo}
        selectTodoIdForEdit={selectTodoIdForEdit}/>
    </div>
  );
};

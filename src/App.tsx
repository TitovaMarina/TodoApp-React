import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../src/Layouts/DefaultLayout';
import { Home } from '../src/pages/Home';
import { NewTodo } from '../src/pages/NewTodo';
import { TodoProvider } from './utils';
import './App.css';

export const App = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="newTodo" element={<NewTodo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
};

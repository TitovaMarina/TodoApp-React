import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../src/Layouts/DefaultLayout';
import { Home } from '../src/pages/Home';
import { NewTodo } from '../src/pages/NewTodo';
import { TagProvider, TodoProvider } from './utils';
import './App.css';

export const App = () => {
  return (
    <TodoProvider>
      <TagProvider>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="newTodo" element={<NewTodo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TagProvider>
    </TodoProvider>
  );
};

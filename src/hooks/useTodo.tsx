import React from 'react';
import { TodoContext } from '../utils/contextes/TodoContext';

export const useTodo = () => React.useContext(TodoContext);

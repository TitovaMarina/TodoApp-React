import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLink className={styles.link} to="/">
        ToDos list
      </NavLink>
      <NavLink className={styles.link} to="newTodo">
        Create new Todo task
      </NavLink>
    </nav>
  );
};

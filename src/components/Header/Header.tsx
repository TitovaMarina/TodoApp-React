import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
    return (
        <div className={styles.headerContainer}>
            <p className={styles.headerTitle}>
                ToDo list with {todoCount} open task(s)
            </p>
        </div>
    );
}
    
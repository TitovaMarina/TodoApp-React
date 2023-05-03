import React from 'react';
import styles from './Header.module.css';
import { StyledWrapper } from '../Wrapper/StyledWrapper';

interface HeaderProps {
  headerText: string;
}

export const Header: React.FC<HeaderProps> = ({ headerText }) => {
  return (
    <StyledWrapper direction="column" color="#ffffff">
      <header className={styles.headerTitle}>{headerText}</header>
    </StyledWrapper>
  );
};

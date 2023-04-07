import React, { ReactElement, ReactNode }  from 'react';
import styles from './Wrapper.module.css';

interface WrapperProps {
  children:  ReactNode | ReactElement;
  color: 'green' | 'blue' | 'white';
  direction: 'column' | 'row';
}

export const Wrapper: React.FC<WrapperProps> = (props) => {
  const className = `${styles.wrapper} ${styles[props.color]} ${styles[props.direction]}`;

  return (
      <div className={className}>
          {props.children}  
      </div>
  );
}
    
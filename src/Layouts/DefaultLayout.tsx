import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../components/Menu/Menu';

export const DefaultLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

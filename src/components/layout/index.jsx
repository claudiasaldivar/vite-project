import React from 'react';
import './Container.scss'; // Importa el archivo Sass que contiene los estilos

const Layout = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
};

export default Layout;


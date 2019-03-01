import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigator.css';

const Navigator = () => {
  return (
    <div className='nav'>
      <NavLink exact to='/' className='links'>
        Home
      </NavLink>
      <NavLink to='/smurf-form' className='links'>
        Join The Village
      </NavLink>
    </div>
  );
};

export default Navigator;

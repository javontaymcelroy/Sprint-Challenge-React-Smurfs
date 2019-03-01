import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
  return (
    <div>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink to='/smurf-form'>Join The Village</NavLink>
    </div>
  );
};

export default Navigator;

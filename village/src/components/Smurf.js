import React from 'react';
import './Smurfs.css';
import Tilt from 'react-tilt';

const Smurf = props => {
  return (
    <Tilt className='Tilt' className='Tilt' options={{ max: 15 }}>
      <div className='Smurf'>
        <div className='Tilt-inner'>
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </div>
      </div>
    </Tilt>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

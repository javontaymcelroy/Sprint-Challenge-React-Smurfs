import React, { Component } from 'react';
import './SmurfForm.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();

    const newSmurf = {
      name: event.target.name.value,
      age: Number(event.target.age.value),
      height: event.target.height.value
    };

    this.props.handleNewSmurf(newSmurf);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder='Smurf Name'
            value={this.state.name}
            name='name'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='Smurf Age'
            value={this.state.age}
            name='age'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='Smurf Height'
            value={this.state.height}
            name='height'
          />
          <button type='submit' className='submit-btn'>
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

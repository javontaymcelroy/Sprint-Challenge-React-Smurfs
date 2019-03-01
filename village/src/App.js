import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Home from './components/Home';
import Navigator from './components/Navigator';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3333/smurfs');
      this.setState({ smurfs: res.data });
    } catch (err) {
      console.log(err.message);
    }
  }

  handleNewSmurf = newSmurf => {
    axios
      .post('http://localhost:3333/smurfs/', newSmurf)
      .then(res =>
        this.setState({
          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className='App'>
        <Route path='/' component={Navigator} />
        <Route exact path='/' component={Home} />
        <Route
          path='/smurf-form'
          render={props => (
            <SmurfForm {...props} handleNewSmurf={this.handleNewSmurf} />
          )}
        />
        <Smurfs smurfs={this.state.smurfs} />
        <span className='overlay' />
      </div>
    );
  }
}

export default App;

// DEPENDANCIES:
import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

// COMPONENTS:
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Home from './components/Home';
import Navigator from './components/Navigator';

// STYLES:
import './App.css';

// CLASS COMPONENT:
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  // API GET REQUEST:
  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3333/smurfs');
      this.setState({ smurfs: res.data });
    } catch (err) {
      console.log(err.message);
    }
  }

  // HANDLERS:
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

  deleteSmurf = id => e => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res =>
        this.setState({
          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  };

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
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />
        <span className='overlay' />
      </div>
    );
  }
}

export default App;

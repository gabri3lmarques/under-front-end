import React from 'react';
import { URI } from './env';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: {}
    }
  }

  componentDidMount() {
    fetch(URI)
    .then((response) => response.json())
    .then((response) => console.log(response));
  }
  
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>teste</p>
          </div>
          <div className="col-md-6">
            <p>bootstrap</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

import React, {useState} from 'react';
import React, {Component} from 'react';
import './App.css';

function App() {

  let [example, changeExample] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
       <p>Count: {example}</p>
       <button onClick={() => {changeExample(example + 2)}}>Increase!</button>
      </header>
    </div>
  );
}

export default App;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p>Count: {this.state.counter}</p>
          <button onClick={() => {this.setState({counter: this.state.counter + 1});
          }}>Increase!</button>
          </header>
      </div>
    )
  }
}



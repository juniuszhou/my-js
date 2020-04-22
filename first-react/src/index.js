import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  render() { 
    return (
      <div>
      <div>
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div>
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div>
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      </div>
    );
  }
}



function MyApp() {
  return ( 
    <div>
      <h1>Junius </h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul> 
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <MyApp />,
  document.getElementById('left')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

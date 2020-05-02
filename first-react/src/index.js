import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
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

function MyApp() {
  return ( 
    <div>
      <h1>Junius </h1>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></img>
    </div>
  )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('left')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

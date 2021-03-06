import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: false })}</h2>
    </div>     
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

class ReactClass extends React.Component {
  render () {
    return (
      <h1>My first React Class Component!</h1>
    )
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <h1>CABEÇALHO DA PÁGINA</h1>
      <main>
        <App />
      </main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

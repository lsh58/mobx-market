import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import App from './App';
import MarketStore from './stores/market';

const market = new MarketStore();

ReactDOM.render(
  <Provider market={market}>
    <App />
  </Provider>,
  document.getElementById('root')
);

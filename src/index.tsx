// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import MarketStore, {StoreContext} from './stores/market';

// ReactDOM.render(
//   <StoreContext.Provider value={MarketStore}>
//     <App />
//   </StoreContext.Provider>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import MarketStore from './stores/market';

const market = new MarketStore();

ReactDOM.render(
  <Provider market={market}>
    <App />
  </Provider>,
  document.getElementById('root')
);

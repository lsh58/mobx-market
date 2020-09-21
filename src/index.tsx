import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import App from './App';
import MarketStore from './stores/market';
import theme from './theme'
import { ThemeProvider } from '@material-ui/styles'

const market = new MarketStore();

ReactDOM.render(
  <Provider market={market}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

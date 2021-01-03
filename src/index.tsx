import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react"; // MobX 에서 사용하는 Provider
import MainPage from "./MainPage";
import MarketStore from "./stores/market";
import CommentStore from "./stores/comment";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./consts/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

const market = new MarketStore();
const comment = new CommentStore();

ReactDOM.render(
  <Provider market={market} comment={comment}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

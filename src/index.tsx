import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import createMockServer from './mockServer';
import App from './App';
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";


createMockServer('development');

const store: Store<TileState, TileAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

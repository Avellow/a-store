import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "./store";
import "./index.css";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // СТРИКТ МОД отключен в связи с ошибкой библиотеки core-components (метод findDOMNode запрещен)
  // необходимо выяснить, как исправить
  /*<React.StrictMode>*/
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  /*</React.StrictMode>*/
);

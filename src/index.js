import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CounterContextProvider } from "./CounterContext";

import App from "./templates/App/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>,
  rootElement
);

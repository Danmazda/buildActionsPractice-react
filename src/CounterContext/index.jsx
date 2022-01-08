import { reducer } from "./reducer";
import { buildActions } from "./build-actions";
const { createContext, useContext, useReducer, useRef } = require("react");
const Context = createContext();

export const initialState = {
  counter: 0,
  loading: false
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const action = useRef(buildActions(dispatch));
  return (
    <Context.Provider value={[state, action.current]}>
      {children}
    </Context.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (context === "undefined") {
    throw new Error(
      "You should use useCounterContext inside CounterContextProvider"
    );
  }

  return [...context];
};

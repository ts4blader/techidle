import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

//* Store Context
const StoreContext = createContext(null);
//* INITIAL STATE
const INITIAL = {
  showOverlay: false,
  overlayAction: () => {},
  showSignIn: true,
};
//* ACTION
const ACTION = {
  HIDE_OVERLAY: "HIDE_OVERLAY",
  SHOW_OVERLAY: "SHOW_OVERLAY",
  HIDE_SIGNIN: "HIDE_SIGNIN",
  SHOW_SIGNIN: "SHOW_SIGNIN",
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { Store, useStore, ACTION };

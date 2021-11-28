import { ACTION } from "./Store";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.HIDE_OVERLAY:
      return { ...state, showOverlay: false, overlayAction: () => {} };
    case ACTION.SHOW_OVERLAY:
      return { ...state, showOverlay: true, overlayAction: action.payload };
    case ACTION.HIDE_SIGNIN:
      return { ...state, showSignIn: false };
    case ACTION.SHOW_SIGNIN:
      return { ...state, showSignIn: true };
  }
};

export default reducer;

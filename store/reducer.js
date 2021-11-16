import { ACTION } from "./Store";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.HIDE_OVERLAY:
      return { ...state, showOverlay: false, overlayAction: () => {} };
    case ACTION.SHOW_OVERLAY:
      return { ...state, showOverlay: true, overlayAction: action.payload };
  }
};

export default reducer;

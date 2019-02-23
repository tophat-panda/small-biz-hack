import { combineReducers } from "redux";

export default combineReducers({
  incoming_call: (state = false, action) => {
    switch (action.type) {
      case "INCOMING_CALL":
        console.log(action.payload);
        return true;
      case "SET_CALL_STATUS":
        if (action.payload !== "started") {
          return false;
        }
        return state;
      default:
        return state;
    }
  },
  call_in_progress: (state = false, action) => {
    switch (action.type) {
      case "SET_CALL_STATUS":
        if (action.payload === "answered") {
          return true;
        }
        return false;
      default:
        return state;
    }
  }
});

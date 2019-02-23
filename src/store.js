import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

window.answer = null;
window.reject = null;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, store => next => action => {
      switch (action.type) {
        case "ANSWER_CALL":
          window.answer && window.answer();
        case "REJECT_CALL":
          window.reject && window.reject();
      }
      next(action);
    })
  )
);

console.log(process.env.REACT_APP_NEXMO_TOKEN);

new window.ConversationClient()
  .login(process.env.REACT_APP_NEXMO_TOKEN)
  .then(application => {
    window.nexmo = application;

    application.on("member:call", (member, call) => {
      store.dispatch({ type: "INCOMING_CALL", payload: call });
      window.answer = () => call.answer();
      window.reject = () => call.reject();
    });
    application.on("call:status:changed", call => {
      store.dispatch({ type: "SET_CALL_STATUS", payload: call.status });
    });
  });

export default store;

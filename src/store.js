import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

window.answer = null;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, store => next => action => {
      switch (action.type) {
        case "ANSWER_CALL":
          window.answer && window.answer();
      }
      next(action);
    })
  )
);

console.log(process.env.REACT_APP_NEXMO_TOKEN);

new window.ConversationClient()
  .login(process.env.REACT_APP_NEXMO_TOKEN)
  .then(application => {
    console.log("initialized");
    window.nexmo = application;

    application.on("member:call", (member, call) => {
      console.log("INCOMING CALL");
      window.answer = () => call.answer();
    });
    application.on("call:state:change");
  });

export default store;

import { combineReducers } from "redux"
import authReducer from "./authReducer"
// import { reduxTokenAuthReducer } from "redux-token-auth"

const rootReducer = combineReducers({
  auth: authReducer
  // reduxTokenAuth: reduxTokenAuthReducer
})

export default rootReducer
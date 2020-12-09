import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2183480Reducer from '../features/SignIn2183480/redux/reducers'
import SignIn2183466Reducer from '../features/SignIn2183466/redux/reducers'
import SignIn2183435Reducer from '../features/SignIn2183435/redux/reducers'
import SignIn2177553Reducer from '../features/SignIn2177553/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2183480: SignIn2183480Reducer,
SignIn2183466: SignIn2183466Reducer,
SignIn2183435: SignIn2183435Reducer,
SignIn2177553: SignIn2177553Reducer,

});
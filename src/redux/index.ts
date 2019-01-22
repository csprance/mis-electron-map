import { combineReducers } from 'redux';

import { misMapReducer as misMap } from './mismap';

export const rootReducer = combineReducers({
  misMap
});

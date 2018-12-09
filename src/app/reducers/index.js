import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';

const rootReducers = combineReducers({
  i18n: i18nReducer,
});

export default rootReducers;

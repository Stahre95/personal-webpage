import { combineReducers } from 'redux';
import { reducer as activeViewReducer } from './activeView';

const rootReducer = combineReducers({
    activeView: activeViewReducer,
})

export { rootReducer }
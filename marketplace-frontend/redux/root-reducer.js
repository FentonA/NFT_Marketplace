import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key:'root',
}

const rootReducer = combineReducers({

})

export default persistReducer(persistConfig, rootReducer);
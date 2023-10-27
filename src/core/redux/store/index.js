import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import remaster from 'remaster';

const config = {
  name: 'auth',
  initialState: {
    headers: {},
  },
  actions: {},
};

const auth = remaster(config);

const rootReducer = combineReducers({
	auth
})

const persistConfig = {
  key: 'EmiteAi',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers'; // Make sure this path is correct
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Disable serializable checks for non-serializable state
		}),
});

export const persistor = persistStore(store);

export default store;

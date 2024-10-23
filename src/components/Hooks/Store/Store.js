import { configureStore } from "@reduxjs/toolkit";
import Snackbar from "../Reducers/Snackbar/index";
import { rootReducers } from "../Reducers";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions : [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)
export default store
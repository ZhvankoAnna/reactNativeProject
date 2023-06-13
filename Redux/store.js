import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { authSlice } from "./Auth/auth-slice";
import { postsSlice } from "./Posts/posts-slice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [postsSlice.name]: postsSlice.reducer,
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: rootReducer,
  // {
  //   // auth: persistedReducer,
  //   auth: authReducer,
  // },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);

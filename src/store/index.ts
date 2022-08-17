import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSagas from "./rootSagas";
import { configureStore, Store } from '@reduxjs/toolkit'
import { ApplicationState } from "./types";

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
});


sagaMiddleware.run(rootSagas);

export default store;

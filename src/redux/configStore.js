import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import carouselReducer from "./reducers/carousel.reducer";
import quanLyPhimReducer from "./reducers/quanLyPhim.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  carouselReducer: carouselReducer,
  quanLyPhimReducer: quanLyPhimReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

import { CAROUSEL_ACTION } from "../types/carousel.type";

const initialState = {
  carouselList: [],
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAROUSEL_ACTION.GET_CAROUSEL:
      return { ...state, carouselList: action.carouselList };

    default:
      return state;
  }
};

export default carouselReducer;

import { Reducer } from "redux";
import * as SS from "../types/sunrisesunset";

// Define the initial state for the user reducer
const initialState: SS.SunriseSunsetState = {
  loading: false,
  data: null,
  error: null,
};

/**
 * The user reducer function.
 * @param state - The current state of the reducer.
 * @param action - The action that was dispatched.
 * @returns The new state of the reducer.
 */
const sunsetsunriseReducer: Reducer<SS.SunriseSunsetState, SS.SunriseSunsetAction> = (state = initialState, action: any) => {
  switch (action.type) {
    case SS.FETCH_SUNRISE_SUNSET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SS.FETCH_SUNRISE_SUNSET_SUCCESS:
      const jsonString = action.payload.substring(action.payload.indexOf('{'), action.payload.lastIndexOf('}') + 1);
      const jsonObject = JSON.parse(jsonString);
      return {
        ...state,
        loading: false,
        data: jsonObject.results,
        error: null,
      };
    case SS.FETCH_SUNRISE_SUNSET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: null,
      };
    default:
      return state;
  }
};

export default sunsetsunriseReducer;

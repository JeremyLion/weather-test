import { Reducer } from "redux";
import * as IP from "../types/ip";

// Define the initial state for the user reducer
const initialState: IP.IpState = {
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
const ipReducer: Reducer<IP.IpState, IP.IPAction> = (state = initialState, action: any) => {
  switch (action.type) {
    case IP.FETCH_IP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case IP.FETCH_IP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };
    case IP.FETCH_IP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        data: null,
      };
    default:
      return state;
  }
};

export default ipReducer;

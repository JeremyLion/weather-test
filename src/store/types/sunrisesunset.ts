export const FETCH_SUNRISE_SUNSET_REQUEST = "FETCH_SUNRISE_SUNSET_REQUEST";
export const FETCH_SUNRISE_SUNSET_SUCCESS = "FETCH_SUNRISE_SUNSET_SUCCESS";
export const FETCH_SUNRISE_SUNSET_ERROR = "FETCH_SUNRISE_SUNSET_ERROR";

export interface SunriseSunsetState {
  loading: boolean;
  data: any;
  error: any;
}

interface DataRequestAction {
  type: typeof FETCH_SUNRISE_SUNSET_REQUEST;
}

interface DataSuccessAction {
  type: typeof FETCH_SUNRISE_SUNSET_SUCCESS;
  payload: {
    data: any;
  };
}

interface DataFailureAction {
  type: typeof FETCH_SUNRISE_SUNSET_ERROR;
  payload: {
    error: any;
  };
}

// Define a union type for all the user actions
export type SunriseSunsetAction =
  | DataRequestAction
  | DataSuccessAction
  | DataFailureAction;

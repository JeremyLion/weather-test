export const FETCH_IP_REQUEST = "FETCH_IP_REQUEST";
export const FETCH_IP_SUCCESS = "FETCH_IP_SUCCESS";
export const FETCH_IP_ERROR = "FETCH_IP_ERROR";

// Define the shape of the IP state
export interface IpState {
  loading: boolean;
  data: any;
  error: any;
}

interface DataRequestAction {
  type: typeof FETCH_IP_REQUEST;
}

interface DataSuccessAction {
  type: typeof FETCH_IP_SUCCESS;
  payload: {
    data: any;
  };
}

interface DataFailureAction {
  type: typeof FETCH_IP_ERROR;
  payload: {
    error: any;
  };
}

// Define a union type for all the user actions
export type IPAction =
  | DataRequestAction
  | DataSuccessAction
  | DataFailureAction;

import { fetchIp } from "../../api/ipApi";
import {
  FETCH_IP_REQUEST,
  FETCH_IP_SUCCESS,
  FETCH_IP_ERROR,
} from "../types/ip";

/**
 * Retrieves IP data from the API and dispatches the appropriate action based on the response.
 * @param {string} ip - The IP address to retrieve data for.
 * @returns {function} A function that takes in the `dispatch` function and returns a promise that resolves with the response data.
 */
export const getIp = (ip: string) => {
  return (dispatch: any) => {
    dispatch({ type: FETCH_IP_REQUEST });
    return fetchIp(ip)
      .then((res) => {
        dispatch({ type: FETCH_IP_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: FETCH_IP_ERROR, payload: err });
      });
  };
};

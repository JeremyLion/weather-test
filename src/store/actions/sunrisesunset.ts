import { fetchSunriseSunset } from "../../api/sunriseSunsetApi";
import {
  FETCH_SUNRISE_SUNSET_REQUEST,
  FETCH_SUNRISE_SUNSET_SUCCESS,
  FETCH_SUNRISE_SUNSET_ERROR,
} from "../types/sunrisesunset";

/**
 * Get the sunrise and sunset times for a given longitude and latitude.
 * @param {number} longitude - The longitude of the location.
 * @param {number} latitude - The latitude of the location.
 * @returns {function} A dispatch function.
 */
export const getSunriseSunset = (longitude: number, latitude: number) => {
  return (dispatch: any) => {
    dispatch({ type: FETCH_SUNRISE_SUNSET_REQUEST });
    return fetchSunriseSunset(longitude, latitude)
      .then((res) => {
        dispatch({ type: FETCH_SUNRISE_SUNSET_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: FETCH_SUNRISE_SUNSET_ERROR, payload: err });
      });
  };
};

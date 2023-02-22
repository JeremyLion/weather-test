import axios from "axios";

// The base URL for the Sunrise-Sunset API
const BASE_URL = `https://api.sunrise-sunset.org/json?callback=mycallback`;

/**
 * Fetches Sunrise-Sunset data for a given latitude and longitude.
 * @param {number} latitude - The latitude of the location to fetch data for.
 * @param {number} longitude - The longitude of the location to fetch data for.
 * @returns {Promise} A Promise that resolves with the Sunrise-Sunset data.
 */
export function fetchSunriseSunset(latitude: number, longitude: number) {
  return axios.get(`${BASE_URL}&lat=${latitude}&lng=${longitude}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

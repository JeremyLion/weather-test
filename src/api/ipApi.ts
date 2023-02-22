import axios from 'axios';

// The base URL for the IPBase API
const BASE_URL = `https://api.ipbase.com/v2/info?apikey=${process.env.REACT_APP_IP_APIKEY}`;

/**
 * Fetches IP information for a given IP address.
 * @param {number} ip - The IP address to fetch information for.
 * @returns {Promise} A Promise that resolves with the IP information.
 */
export function fetchIp(ip: string) {
  return axios.get(`${BASE_URL}&ip=${ip}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
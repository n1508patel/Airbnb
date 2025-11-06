// Mock Airbnb-style API using ES6 Promises
const API_BASE_URL = "https://abcdef.ngrok-free.app"; // ngrok URL

export const fetchListings = () => {
  return axios.get(`${API_BASE_URL}/api/listings`)
    .then(res => res.data)
    .catch(err => {
      console.error(err);
      return [];
    });
};

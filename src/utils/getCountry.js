const axios = require('axios');

const getCountry = async () => {
  try {
    const url = 'https://ipinfo.io/json?token=8909f4357304ee';
    const response = await axios.get(url);
    return response.data.country.toLowerCase();
  } catch (error) {
    return 'ma';
  }
};

// const getCountry = async () => new Promise((resolve) => {
//   resolve('ma');
// });

export default getCountry;

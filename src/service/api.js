import axios from 'axios';

const Api = axios.create({
  baseUrl: 'http://www.omdbapi.com',
  //http://www.omdbapi.com/?apikey=[yourkey]&
});

export default Api;

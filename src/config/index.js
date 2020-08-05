const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8081'
  : 'https://marleyflix.herokuapp.com';

export default {
  URL_BACKEND,
};
import axios from 'axios';
const origin = document.location.origin;
const base = axios.create({
  baseURL: `${origin}:8080`,
  timeout: 1000,
  headers: {
    Authentication: localStorage.getItem('token'),
    //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  },
});

export default base;

import axios from 'axios';
const origin = document.location.origin.replace('http://', '').split('.')[0];
console.log(origin);
const notoken = axios.create({
  baseURL: `http://${origin}.subschool.ru:8080`,
  timeout: 1000,
});

export default notoken;

import axios from 'axios';

let authFetch = axios.create({
  baseURL: 'https://course-api.com',
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common['Accept'] = 'application/json';
    console.log('request sent');
    return request;
  },
  (error) => {
    return Promise.reject(error)
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('response receved');
    return response
  },
  (error) => {
    if (error.response.status === 404) {
        console.log('not found');
    }
    return Promise.reject(error)
  }
);

export default authFetch;

import { useEffect } from 'react';
import axios from 'axios'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  useEffect(() => {
    axios(url).then(res=> console.log(res)).catch(err=> console.log(Error('error')))
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;

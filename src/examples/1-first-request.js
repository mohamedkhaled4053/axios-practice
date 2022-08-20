import { useEffect } from 'react';
import axios from 'axios'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios(url)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;

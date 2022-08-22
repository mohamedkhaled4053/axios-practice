import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      let res1 = await authFetch(url)
      console.log(res1);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center' onClick={fetchData}>interceptors</h2>;
};
export default Interceptors;

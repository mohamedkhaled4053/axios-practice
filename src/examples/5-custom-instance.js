import { useEffect } from 'react';
import authFetch from '../axios/custom';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      let res1 = await authFetch('/react-store-products');
      let res2 = await axios(randomUserUrl);
      console.log(res1, res2);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <h2 className="text-center" onClick={fetchData}>
      custom instance
    </h2>
  );
};
export default CustomInstance;

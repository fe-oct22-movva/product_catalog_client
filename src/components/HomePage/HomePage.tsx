/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect, useState} from 'react';
import {getAllPhones} from '../../api/phones';
import {Phone} from '../../types/types';
import {Banner} from '../Banner';
import {Cards} from '../ProductCard';
import {ShopByCategory} from '../ShopByCategory';

export const HomePage: React.FC = () => {
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);
  const [cheapestPhones, setCheapestPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getAllPhones([
      ['sort', 'newest'],
      ['limit', '12'],
    ])
      .then((data) => {
        setNewestPhones(data.result);
        console.log(data);
      })
      .catch((error) => console.log(error));

    getAllPhones([
      ['sort', 'cheapest'],
      ['limit', '12'],
    ])
      .then((data) => {
        setCheapestPhones(data.result);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Banner />
      <div className="main-container">
        <Cards newestPhones={newestPhones} />
        <ShopByCategory />
      </div>
    </div>
  );
};

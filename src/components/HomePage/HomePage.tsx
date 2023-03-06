import {Banner} from '../Banner';
import {Cards} from '../ProductCard';
import {ShopByCategory} from '../ShopByCategory';
import {PhoneSpecs} from '../PhoneSpecs/PhoneSpecs';
import {AboutPhone} from '../AboutPhone';
import {useEffect, useState} from 'react';
import {Phone} from '../../types/types';
import {getPhones} from '../../api/phones';

export const HomePage = () => {
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then((data) => {
        setNewestPhones(data.result);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [newestPhones]);

  return (
    <div>
      <Banner />
      <div className="main-container">
        <Cards newestPhones={newestPhones} />
        <ShopByCategory />
        <PhoneSpecs />
        <AboutPhone />
      </div>
    </div>
  );
};

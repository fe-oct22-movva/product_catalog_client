import {useEffect, useState} from 'react';
import {getAllPhones} from '../../api/phones';
import {Phone} from '../../types/types';
import {AboutPhone} from '../AboutPhone';
import {Banner} from '../Banner';
import {PhoneSpecs} from '../PhoneSpecs/PhoneSpecs';
import {Cards} from '../ProductCard';
import {ShopByCategory} from '../ShopByCategory';

export const HomePage = () => {
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);
  const [cheapestPhones, setCheapestPhones] = useState<Phone[]>([]);
  const [phonesNumber, setPhonesNumber] = useState(0);

  useEffect(() => {
    getAllPhones([
      ['sort', 'newest'],
      ['limit', '12'],
    ])
      .then((data) => {
        setNewestPhones(data.result);
        setPhonesNumber(data.totalPhones);
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
        <ShopByCategory phonesNumber={phonesNumber} />
        <Cards newestPhones={cheapestPhones} />
        <PhoneSpecs />
        <AboutPhone />
      </div>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect, useState} from 'react';
import {getAllPhones} from '../../api/phones';
import {Phone} from '../../types/types';
import {Banner} from '../../components/Banner';
import {Cards} from '../../components/ProductCard';
import {ShopByCategory} from '../../components/ShopByCategory';

export interface Props {
  setSelectedId: (newId: string) => void;
}

export const HomePage: React.FC<Props> = ({setSelectedId}) => {
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
      })
      .catch((error) => console.log(error));

    getAllPhones([
      ['sort', 'cheapest'],
      ['limit', '12'],
    ])
      .then((data) => {
        setCheapestPhones(data.result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <head>
        <title>Nice Gadgets store</title>
      </head>
      <div>
        <Banner />
        <div className="main-container">
          <Cards
            newestPhones={newestPhones}
            setSelectedId={setSelectedId}
            title="Brand new models"
          />
          <ShopByCategory phonesNumber={phonesNumber} />
          <Cards
            newestPhones={cheapestPhones}
            setSelectedId={setSelectedId}
            title="Hot prices"
          />
        </div>
      </div>
    </>
  );
};

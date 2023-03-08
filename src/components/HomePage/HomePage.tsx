/* eslint-disable @typescript-eslint/no-unused-vars */
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {useEffect, useState} from 'react';
import {getAllPhones} from '../../api/phones';
import {Phone} from '../../types/types';
import {Banner} from '../Banner';
import {Loader} from '../Loader';
import {Cards} from '../ProductCard';
import {ShopByCategory} from '../ShopByCategory';

export interface Props {
  setSelectedId: (newId: string) => void;
}

export const HomePage: React.FC<Props> = ({setSelectedId}) => {
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);
  const [cheapestPhones, setCheapestPhones] = useState<Phone[]>([]);
  const [phonesNumber, setPhonesNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);

    getAllPhones([
      ['sort', 'newest'],
      ['limit', '12'],
    ])
      .then((data) => {
        setNewestPhones(data.result);
        setPhonesNumber(data.totalPhones);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        Notify.failure('Oops, something went wrong. Please try again later.');
      });

    getAllPhones([
      ['sort', 'cheapest'],
      ['limit', '12'],
    ])
      .then((data) => {
        setCheapestPhones(data.result);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        Notify.failure('Oops, something went wrong. Please try again later.');
      });
  }, []);

  return (
    <>
      <head>
        <title>Nice Gadgets store</title>
      </head>

      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

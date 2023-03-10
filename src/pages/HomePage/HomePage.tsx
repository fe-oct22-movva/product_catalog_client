/* eslint-disable @typescript-eslint/no-unused-vars */
import {Notify} from 'notiflix/build/notiflix-notify-aio';
import {memo, useEffect, useState} from 'react';
import {getAllPhones} from '../../api/phones';
import {Banner} from '../../components/Banner';
import {Loader} from '../../components/Loader';
import {ShopByCategory} from '../../components/ShopByCategory';
import {Cards} from '../../components/SliderCards';
import {Phone} from '../../types/types';

interface Props {
  setIsLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HomePage: React.FC<Props> = memo(({
  setIsLoader,
}) => {
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);
  const [cheapestPhones, setCheapestPhones] = useState<Phone[]>([]);
  const [phonesNumber, setPhonesNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  console.log(newestPhones);

  useEffect(() => {
    setIsLoader(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoader(false);
    }, 1000);

    getAllPhones([
      ['sort', 'newest'],
      ['limit', '12'],
    ])
      .then((data) => {
        setNewestPhones(data.result);
        setPhonesNumber(data.totalPhones);
      })
      .catch((error) => {
        console.log(error);
        Notify.failure('Oops, something went wrong. Please try again later.');
      })
      .finally(() => {
        setIsLoader(false);
      });

    getAllPhones([
      ['sort', 'cheapest'],
      ['limit', '12'],
    ])
      .then((data) => {
        setCheapestPhones(data.result);
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
            <Cards newestPhones={newestPhones} title="Brand new models" />
            <ShopByCategory phonesNumber={phonesNumber} />
            <Cards newestPhones={cheapestPhones} title="Hot prices" />
          </div>
        </div>
      )}
    </>
  );
});

HomePage.displayName = 'HomePage';

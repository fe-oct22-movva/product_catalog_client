import {Banner} from '../Banner';
import {Cards} from '../ProductCard';
import {ShopByCategory} from '../ShopByCategory';
import React, {useEffect, useState} from 'react';
import {Phone} from '../../types/types';
import {getAllPhones} from '../../api/phones';

export interface Props {
  setSelectedId: (newId:string) => void
}

export const HomePage: React.FC<Props> = ({setSelectedId}) => {
  const [newestPhones, setNewestPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getAllPhones()
      .then((data) => {
        setNewestPhones(data.result);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Banner />
      <div className="main-container">
        <Cards newestPhones={newestPhones} setSelectedId={setSelectedId} />
        <ShopByCategory />
      </div>
    </div>
  );
};

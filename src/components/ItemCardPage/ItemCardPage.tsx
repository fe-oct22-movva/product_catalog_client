import React from 'react';
import {CardSpec} from '../CardSpec';

export type Props = {
  selectedId: string
  startValue: string
}

export const ItemCardPage: React.FC<Props> = ({selectedId, startValue}) => {
  return <CardSpec selectedId={selectedId} startValue={startValue}/>;
};

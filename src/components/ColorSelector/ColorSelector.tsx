import './ColorSelector.scss';
import React from 'react';

interface Props {
  color: React.CSSProperties;
}

export const ColorSelector: React.FC<Props> = ({color}) => {
  return (
    <button className="color-selector">
      <div className="color-selector__inside" style={color} />
    </button>
  );
};

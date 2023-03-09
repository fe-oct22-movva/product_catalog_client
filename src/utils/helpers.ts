export function checkerId(id: string, newId: string) {
  const splited = id.split('-');

  for (let i = 0; i < splited.length; i++) {
    if (splited[i].includes('gb')) {
      splited[i] = newId.toLowerCase();
    }
  }

  return splited.join('-');
}

export const colorToHex = (color: string) => {
  switch (color) {
    case 'midnightgreen':
      return '#4e5850';
    case 'gold':
      return '#fbd7bd';
    case 'red':
      return '#ba0c2f';
    case 'spacegray':
      return '#52514f';
    case 'silver':
      return '#ebebe3';
    case 'rosegold':
      return '#B76E79';
    case 'purple':
      return '#d1cddb';
    case 'green':
      return '#ade1cd';
    case 'yellow':
      return '#ffe680';
    case 'black':
      return '#202020';
    case 'white':
      return '#f9f6ef';
    default:
      return '#000000';
  }
};

const palleteColors = [
  'midnightgreen',
  'gold',
  'red',
  'spacegray',
  'silver',
  'rosegold',
  'purple',
  'green',
  'yellow',
  'black',
  'white',
];

export function checkerColor(id: string, newColor: string) {
  const splited = id.split('-');

  for (let i = 0; i < splited.length; i++) {
    if (palleteColors.includes(splited[i])) {
      splited[i] = newColor;
    }
  }

  return splited.join('-');
}

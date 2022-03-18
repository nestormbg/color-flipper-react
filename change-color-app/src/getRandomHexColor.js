export default function getRandomHexColor() {
  let color = '#';
  const hexColors = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * (hexColors.length - 0) + 0);
    console.log(randomNumber);
    color += hexColors[randomNumber];
  }

  return color;
}

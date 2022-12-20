import college from '../../assets/icons/go-to-college.svg';
import vacation from '../../assets/icons/take-a-vacation.svg';
import car from '../../assets/icons/buy-a-car.svg';
import weddingParty from '../../assets/icons/throw-a-wedding-party.svg';
import emergencyFund from '../../assets/icons/build-an-emergency-fund.svg';
import haveABaby from '../../assets/icons/have-a-baby.svg';

export const dashboardMap = [
  {
    slug: 'college',
    title: 'Go to college',
    icon: <img width={40} height={40} src={college} alt="" aria-hidden />,
  },
  {
    slug: 'vacation',
    title: 'Take a vacation',
    icon: <img width={40} height={40} src={vacation} alt="" aria-hidden />,
  },
  {
    slug: 'car',
    title: 'Buy a car',
    icon: <img width={40} height={40} src={car} alt="" aria-hidden />,
  },
  {
    slug: 'wedding-party',
    title: 'Throw a wedding party',
    icon: <img width={40} height={40} src={weddingParty} alt="" aria-hidden />,
  },
  {
    slug: 'emergency-fund',
    title: 'Build an emergency fund',
    icon: <img width={40} height={40} src={emergencyFund} alt="" aria-hidden />,
  },
  {
    slug: 'have-a-baby',
    title: 'Have a baby',
    icon: <img width={40} height={40} src={haveABaby} alt="" aria-hidden />,
  },
];

export default dashboardMap;

import './AppHeader.scss';
import HeroImg from '../assets/coffeebanner.jpg';

function AppHeader(props: { sitetitle: string }) {
  return (
    <header>
      <div className='banner'>
        <h1>{props.sitetitle}</h1>
      </div>
      <div className='hero-img'>
        <img src={HeroImg} alt='Coffee banner' />
      </div>
    </header>
  );
};

export default AppHeader;
import './AppHeader.scss';

function AppHeader(props: { sitetitle: string }) {
  return (
    <header>
      <div className='banner'>
        <h1>{props.sitetitle}</h1>
      </div>
      <div className='hero-img'>

      </div>
    </header>
  );
};

export default AppHeader;
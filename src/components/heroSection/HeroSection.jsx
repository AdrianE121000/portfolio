import './heroSection.css';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { useContext } from 'react';
import Context from '../../context/Context';
import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation';

const HeroSection = () => {
  const { translations } = useContext(Context);
  return (
    <div
      className='heroContainer'
      id='about'>
      <div className='heroBg'>
        <HeroBgAnimation />
      </div>
      <div className='heroInnerContainer'>
        <div
          className='heroLeftContainer'
          id='Left'>
          <div className='title'>
            {translations.home.title} <br />{' '}
            <strong className='strong'>{Bio.name}</strong>
          </div>
          <div className='textLoop'>
            {translations.home.subtitle}
            <span>
              <Typewriter
                options={{
                  strings: translations.home.rol,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className='subTitle'>
            {translations.about.map((element, index) => (
              <p
                className='aboutp'
                key={index}>
                {element}
              </p>
            ))}
          </div>
          <a
            className='cvButton'
            href={Bio.cv}
            target='_blank'
            rel='noreferrer'>
            {translations.home.cv}
          </a>
        </div>

        <div
          className='heroRightContainer'
          id='Right'>
          <img
            className='imageHero'
            src='/programer.svg'
            alt='hero-image'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

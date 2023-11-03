import React from 'react';
import './heroSection.css';
import programer from '../../images/programer.svg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { useContext } from 'react';
import Context from '../../context/Context';

const HeroSection = () => {
  const { translations } = useContext(Context);
  return (
    <div
      className='heroContainer'
      id='about'>
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
        </div>

        <div
          className='heroRightContainer'
          id='Right'>
          <img
            className='imageHero'
            src={programer}
            alt='hero-image'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

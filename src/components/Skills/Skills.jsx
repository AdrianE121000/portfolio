import React from 'react';
import './skills.css';
import { useContext } from 'react';
import Context from '../../context/Context';
import { skills } from '../../data/constants';

const Skills = () => {
  const { translations, language } = useContext(Context);
  return (
    <div
      className='container'
      id='skills'>
      <div className='wrapperr'>
        <div className='titleSkills'>{translations.header.skills}</div>
        <div className='skillsContainer'>
          {skills.map((skill, index) => (
            <div
              className='skill'
              key={index}>
              <h2 className='skillTitle'>
                {language === 'es' ? skill.title.es : skill.title.en}
              </h2>
              <div className='skillsList'>
                {skill.skills.map(({ name, image }, index) => (
                  <div
                    className='skillsItem'
                    key={index}>
                    <i className='skillImg'>{image}</i>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

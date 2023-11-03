import React, { useContext } from 'react';
import './cards.css';
import Context from '../../context/Context';

const ProjectCards = ({ project }) => {
  const { translations, language } = useContext(Context);
  return (
    <div className='card'>
      <img
        className='imgProject'
        src={project.image}
      />
      <div className='tags'>
        {project.tags?.map((tag, index) => (
          <span
            className='tag'
            key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className='details'>
        <div className='cardTitle'>{project.title}</div>

        <div className='description'>
          {language === 'es' ? project.description.es : project.description.en}
        </div>
      </div>

      <a
        href={project.webapp}
        target='_blank'
        rel='noreferrer'>
        <button className='viewProject'>{translations.works.view}</button>
      </a>
    </div>
  );
};

export default ProjectCards;
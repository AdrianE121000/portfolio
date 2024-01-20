import { useContext } from 'react';
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
      <div className='members'>
        {project.member?.map((member, index) => (
          <a
            key={index}
            href={member.github}
            target='_blank'
            rel='noreferrer'>
            <img
              src={member.img}
              alt='user photo'
            />
          </a>
        ))}
      </div>

      <div className='viewButton'>
        <a
          href={project.webapp}
          target='_blank'
          rel='noreferrer'>
          <button className='viewProject'>{translations.works.view}</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;

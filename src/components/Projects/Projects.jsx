import React from 'react';
import './projects.css';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';
import { useContext } from 'react';
import Context from '../../context/Context';

const Projects = () => {
  const { translations } = useContext(Context);
  return (
    <div
      className='projectContainer'
      id='projects'>
      <div className='wrapperProjects'>
        <div className='titleProjects'>{translations.works.title}</div>

        <div className='cardContainer'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

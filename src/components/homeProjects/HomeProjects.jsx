import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import ProjectCard from './commons/projectCard/ProjectCard';
import './HomeProjects.css';

const HomeProjects = () => {
  const { text } = useContext(LanguageContext);

  return (
    <section
      id='projects'
      className='homeProjects'
    >
      {text.home.projects.map(project => (
        <ProjectCard
          key={project.title}
          preview={project.preview}
          title={project.title}
          description={project.description}
          stack={project.stack}
          href={project.href}
        />
      ))}
    </section>
  );
};

export default HomeProjects;

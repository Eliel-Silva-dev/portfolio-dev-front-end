import style from './style.min.module.css';
import CardProjects from '@/components/CardProjects';
import dataProject from '@/database/ProjectDataBase';

const Projects = () => {
  const projects_dev = dataProject;

  return (
    <main className={style.main_project}>
      <h2 className={style.title}>
        {'<'}Projetos Desenvolvidos{'>'}
      </h2>
      <section className={style.projects} id={style.projects}>
        {projects_dev &&
          projects_dev.map((project, idx) => {
            return (
              <CardProjects
                key={idx}
                src={project.src}
                alt={project.alt}
                title={project.title}
                p={project.p}
                h3={project.h3}
                href_git={project.href_git}
                href_site={project.href_site}
                txt_git={project.txt_git}
                txt_site={project.txt_site}
                status_deploy={project.status}
              />
            );
          })}
      </section>
    </main>
  );
};

export default Projects;

import style from './style.min.module.css';
import CardSkill from '@/components/CardSkill';
import dataSkill from '@/database/SkilDataBase';

const Abilities = () => {
  const skills = dataSkill;
  return (
    <main className={style.abilities}>
      <h2 className={style.title}>
        {'<'}Habilidades + conhecimentos{'>'}
      </h2>
      <section className={style.skills} id="skills">
        <div className={style.container}>
          {skills &&
            skills.map((skill, idx) => {
              return (
                <CardSkill
                  key={idx}
                  src={skill.src}
                  alt={skill.alt}
                  title={skill.title}
                  p={skill.p}
                  href={skill.href}
                  txt_link={skill.txt_link}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Abilities;

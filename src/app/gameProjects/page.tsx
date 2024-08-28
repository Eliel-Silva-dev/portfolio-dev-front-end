import style from './style.min.module.css';
import CardProjects from '@/components/CardProjects';
import GameDataProject from '@/database/GameDataBase';

const GameProjects = () => {
  const games_dev = GameDataProject;

  return (
    <main className={style.main_game}>
      <h2 className={style.title}>
        {'<'}Jogos Desenvolvidos{'>'}
      </h2>
      <section className={style.game} id={style.game}>
        {games_dev &&
          games_dev.map((game, idx) => {
            return (
              <CardProjects
                key={idx}
                src={game.src}
                alt={game.alt}
                title={game.title}
                p={game.p}
                h3={game.h3}
                href_git={game.href_git}
                href_site={game.href_site}
                txt_git={game.txt_git}
                txt_site={game.txt_site}
                status_deploy={game.status}
              />
            );
          })}
      </section>
    </main>
  );
};

export default GameProjects;

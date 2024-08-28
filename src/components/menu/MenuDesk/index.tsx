'use client';

import { useRef } from 'react';
import style from './style.min.module.css';

import Link from 'next/link';

const MenuDesk = () => {
  const gameslink = useRef({} as HTMLUListElement);

  const showGamesLink = () => {
    gameslink.current.classList.toggle('style_min_active__Qnc3_');
  };
  return (
    <ul className={style.menu_desk}>
      <li>
        <Link href={'/'}>Inicio</Link>
      </li>
      <li className={style.container_LinkGames}>
        <Link onClick={showGamesLink} href={''}>
          Projetos
        </Link>
        <ul ref={gameslink} className={`${style.game_links} ${style.active}`}>
          <li>
            <Link href={'/projects'}>Sites</Link>
          </li>
          <li>
            <Link href={'/gameProjects'}>Jogos</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={'/abilities'}>Habilidades</Link>
      </li>
      <li>
        <Link href={'/about'}>Sobre</Link>
      </li>
    </ul>
  );
};

export default MenuDesk;

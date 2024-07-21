import style from './style.min.module.css';

import Link from 'next/link';

const MenuDesk = () => {
  return (
    <ul className={style.menu_desk}>
      <li>
        <Link href={'/'}>Inicio</Link>
      </li>
      <li>
        <Link href={'/projects'}>Projetos</Link>
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

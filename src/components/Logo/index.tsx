import Link from 'next/link';
import style from './style.min.module.css';

const Logo = () => {
  return (
    <div id={style.logo_title}>
      <img src="/img/logo_hydra.png" alt="Logo Hydrah Tecnologia" />
      <h2>
        <Link href={'/'}>Portfolio</Link>
      </h2>
    </div>
  );
};

export default Logo;

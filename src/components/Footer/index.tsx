'use client';

import { useEffect, useState } from 'react';
import Lgpd from '../Lgpd';
import style from './style.min.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import BtnContact from '../buttons/BtnContact';

const Footer = () => {
  const [localStorage, setLocalStorage] = useState(true);

  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    const lsContent = window.localStorage.getItem('lgpdportfolio');

    if (!lsContent) {
      setLocalStorage(false);
    }
  }, []);

  return (
    <footer className={style.footer}>
      <p className={style.redes}>
        <Link
          href="https://github.com/Eliel-Silva-dev"
          target="_blank"
          rel="external noreferrer noopener"
        >
          <FaGithub /> Github
        </Link>{' '}
        -{' '}
        <Link
          href="https://www.linkedin.com/in/eliel-silva-51146565/"
          target="_blank"
          rel="external noreferrer noopener"
        >
          <FaLinkedinIn /> Linkedin
        </Link>
      </p>
      <BtnContact />
      <p>
        <Link href={'/privacyPolicies'}>Politica de privacidade</Link> -{' '}
        <Link href={'/termsUse'}>Termos de uso</Link>
      </p>
      <p>Desenvolvido por Hydrah Tecnologia</p>
      <p>&#9400; Todos os direitos reservados - {year}</p>

      {!localStorage && <Lgpd />}
    </footer>
  );
};
export default Footer;

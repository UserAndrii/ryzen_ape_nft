import React from 'react';
import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <p className={s.copyright}>&copy; Yacht ape 2024 all rights</p>{' '}
      <p className={s.copyright}>reserved</p>
    </footer>
  );
};

export default Footer;

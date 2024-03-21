import React, { useState } from 'react';
import s from './Header.module.scss';

import Twitter from '../../images/icons/Twitter';
import Discord from '../../images/icons/Discord';
import Logomark from '../../images/icons/Logomark';

import Hero from '../Hero';
import Logo from '../../images/icons/Logo';
import BurgerMenu from '../BurgerMenu';

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(prevState => !prevState);
    if (!isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden auto';
    }
  };

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.header__menu}>
          <a href="./" className={s.header__logo}>
            <Logo className={s.header__icon} />
          </a>

          <button
            type="button"
            aria-label="open the menu"
            className={s.header__menu_btn}
            onClick={toggleMenu}
          >
            <span>MENU</span>
          </button>
        </div>

        <div className={s.header__main_container}>
          <ul className={s.header__media_links}>
            <li className={s.header__media_item}>
              <a
                href="https://discord.com/"
                className={s.header__media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Discord className={s.header__media_icon} />
              </a>
            </li>
            <li className={s.header__media_item}>
              <a
                href="https://www.softryzen.com/"
                className={s.header__media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Logomark className={s.header__media_icon} />
              </a>
            </li>
            <li className={s.header__media_item}>
              <a
                href="https://twitter.com/"
                className={s.header__media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Twitter className={s.header__media_icon} />
              </a>
            </li>
          </ul>
        </div>
        <Hero />
        <BurgerMenu isOpen={isOpenMenu} onClick={toggleMenu} />
      </header>
    </div>
  );
};

export default Header;

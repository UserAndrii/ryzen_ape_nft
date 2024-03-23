import React, { useState } from 'react';
import { Link } from 'react-scroll';
import cn from 'classnames';

import s from './Header.module.scss';
import Twitter from '../../images/icons/Twitter';
import Discord from '../../images/icons/Discord';
import Logomark from '../../images/icons/Logomark';

import Hero from '../Hero';
import Logo from '../../images/icons/Logo';
import BurgerMenu from '../BurgerMenu';

const Header: React.FC = () => {
  const menu = ['mint', 'arts', 'faq', 'm-map', 'about'];
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(prev => !prev);

    if (!isOpenMenu && window.innerWidth <= 767) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden auto';
    }
  };

  return (
    <header className={s.container}>
      <div className={s.header}>
        <div className={s.header__menu}>
          <a href="./" className={s.header__logo}>
            <Logo className={s.header__icon} />
          </a>

          <nav className={s.header__nav}>
            <ul
              className={cn(s.header__menu_wrapper, { [s.open]: isOpenMenu })}
            >
              <li>
                <button
                  type="button"
                  aria-label="open the menu"
                  className={s.header__menu_btn}
                  onClick={toggleMenu}
                >
                  <span>{isOpenMenu ? 'CLOSE' : 'MENU'}</span>
                </button>
              </li>

              {menu.map((id, index) => (
                <li key={index}>
                  <Link
                    className={cn(s.header__menu_link, {
                      [s.open]: isOpenMenu,
                    })}
                    to={id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setIsOpenMenu(prev => !prev)}
                  >
                    <span>{id}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
        {window.innerWidth <= 767 && (
          <BurgerMenu isOpen={isOpenMenu} onClick={toggleMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;

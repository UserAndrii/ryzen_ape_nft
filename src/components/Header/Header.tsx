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

import { IHeaderProp } from '../../types';

const Header: React.FC<IHeaderProp> = ({ isScrolled }) => {
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
    <div className={s.container}>
      <div className={s.content}>
        <header className={s.header}>
          <a
            href="./"
            className={s.header__logo}
            aria-label="Logo, link to the main page"
          >
            <Logo className={s.header__icon} />
          </a>

          <nav
            className={cn(s.header__nav, {
              [s.header__scrolled]: isScrolled,
            })}
          >
            <ul
              className={cn(s.header__menu, {
                [s.open]: isOpenMenu,
                [s.header__scrolled]: isScrolled,
              })}
            >
              <li>
                <button
                  type="button"
                  aria-label="Open or Close the mobile menu"
                  className={cn(s.header__menu_btn, {
                    [s.header__scrolled]: isScrolled,
                  })}
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
                      [s.header__scrolled]: isScrolled,
                    })}
                    to={id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setIsOpenMenu(prev => !prev)}
                    aria-label={`Link to the ${id} section`}
                  >
                    <span>{id}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div
          className={cn(s.media, {
            [s.header__scrolled]: isScrolled,
          })}
        >
          <ul className={s.media__links}>
            <li className={s.media__item}>
              <a
                href="https://discord.com/"
                className={cn(s.media__link, {
                  [s.header__scrolled]: isScrolled,
                })}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Link to Discord social network"
              >
                <Discord className={s.media__icon} />
              </a>
            </li>
            <li className={s.media__item}>
              <a
                href="https://www.softryzen.com/"
                className={cn(s.media__link, {
                  [s.header__scrolled]: isScrolled,
                })}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Link to SoftRyzen webapp"
              >
                <Logomark className={s.media__icon} />
              </a>
            </li>
            <li className={s.media__item}>
              <a
                href="https://twitter.com/"
                className={cn(s.media__link, {
                  [s.header__scrolled]: isScrolled,
                })}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Link to Twitter social network"
              >
                <Twitter className={s.media__icon} />
              </a>
            </li>
          </ul>
        </div>
        <Hero />
        {window.innerWidth <= 767 && (
          <BurgerMenu isOpen={isOpenMenu} onClick={toggleMenu} />
        )}
      </div>
    </div>
  );
};

export default Header;

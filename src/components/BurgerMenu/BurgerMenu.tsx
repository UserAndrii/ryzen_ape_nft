import React from 'react';
import cn from 'classnames';

import s from './BurgerMenu.module.scss';
import Logo from '../../images/icons/Logo';
import Discord from '../../images/icons/Discord';
import Logomark from '../../images/icons/Logomark';
import Twitter from '../../images/icons/Twitter';

import { IBurgerMenuProps } from '../../types';

const BurgerMenu: React.FC<IBurgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <div
      className={cn(s.container, {
        [s.open]: isOpen,
      })}
    >
      <div className={s.content}>
        <div className={s.menu}>
          <a href="./" className={s.logo}>
            <Logo className={s.logo__icon} />
          </a>

          <button
            type="button"
            aria-label="open the menu"
            className={s.menu__btn}
            onClick={onClick}
          >
            <span>CLOSE</span>
          </button>
        </div>

        <nav className={s.menu__list}>
          <ul className={s.media_links}>
            <li className={s.media_item}>
              <a
                href="https://discord.com/"
                className={s.media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Discord className={s.media_icon} />
              </a>
            </li>
            <li className={s.media_item}>
              <a
                href="https://www.softryzen.com/"
                className={s.media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Logomark className={s.media_icon} />
              </a>
            </li>
            <li className={s.media_item}>
              <a
                href="https://twitter.com/"
                className={s.media_link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Twitter className={s.media_icon} />
              </a>
            </li>
          </ul>

          <ul>
            <li className={s.menu__item}>
              <a href="#" className={s.menu__link}>
                ABOUT
              </a>
            </li>
            <li className={s.menu__item}>
              <a href="#" className={s.menu__link}>
                M-MAP
              </a>
            </li>
            <li className={s.menu__item}>
              <a href="#" className={s.menu__link}>
                FAQ
              </a>
            </li>
            <li className={s.menu__item}>
              <a href="#" className={s.menu__link}>
                ARTS
              </a>
            </li>
            <li className={s.menu__item}>
              <a href="#" className={s.menu__link}>
                MINT
              </a>
            </li>
          </ul>
        </nav>

        <p className={s.copyright}>&copy; Yacht ape 2024 all rights</p>
        <p className={s.copyright}>reserved</p>
      </div>
    </div>
  );
};

export default BurgerMenu;

import React from 'react';
import s from './Header.module.scss';

import Logo from '../../images/icons/Logo';
import heroMob from '../../images/nft/hero/hero_mobile.png';
import heroMob2x from '../../images/nft/hero/hero_mobile@2x.png';
import heroTab from '../../images/nft/hero/hero_tablet.png';
import heroTab2x from '../../images/nft/hero/hero_tablet@2x.png';
import heroDesk from '../../images/nft/hero/hero_desktop.png';
import heroDesk2x from '../../images/nft/hero/hero_desktop@2x.png';

import Twitter from '../../images/icons/Twitter';
import Discord from '../../images/icons/Discord';
import Logomark from '../../images/icons/Logomark';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header__menu}>
        <a href="./" className={s.header__logo}>
          <Logo className={s.header__icon} />
        </a>

        <button
          type="button"
          aria-label="open the menu"
          className={s.header__menu_btn}
        >
          MENU
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

        <div className={s.header__main}>
          <p className={s.header__subtitle}>diD yOu seE iT ?</p>
          <h1 className={s.header__title}>YACHT APES</h1>
          <p className={s.header__description}>Apes aRe eveRywhere</p>

          <div className={s.header__hero_container}>
            <picture>
              <source
                type="image/png"
                media="(min-width: 1200px)"
                srcSet={`${heroDesk} 1x, ${heroDesk2x} 2x`}
              />
              <source
                type="image/png"
                media="(min-width: 768px)"
                srcSet={`${heroTab} 1x, ${heroTab2x} 2x`}
              />
              <source
                type="image/png"
                media="(max-width: 767px)"
                srcSet={`${heroMob} 1x, ${heroMob2x} 2x`}
              />
              <img
                src={`${heroMob}`}
                alt="Ape"
                width={216}
                height={284}
                className={s.header__hero_image}
              />
            </picture>

            <a href="#mint" className={s.header__link_meet}>
              MEET APES
            </a>
          </div>

          <p className={s.header__text}>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

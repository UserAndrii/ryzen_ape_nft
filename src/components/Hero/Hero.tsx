import React from 'react';
import s from './Hero.module.scss';
import { Link } from 'react-scroll';

import heroMob from '../../images/nft/hero/hero_mobile.png';
import heroMob2x from '../../images/nft/hero/hero_mobile@2x.png';
import heroTab from '../../images/nft/hero/hero_tablet.png';
import heroTab2x from '../../images/nft/hero/hero_tablet@2x.png';
import heroDesk from '../../images/nft/hero/hero_desktop.png';
import heroDesk2x from '../../images/nft/hero/hero_desktop@2x.png';

const Hero: React.FC = () => {
  return (
    <div className={s.hero__main}>
      <p className={s.hero__subtitle}>diD yOu seE iT ?</p>
      <h1 className={s.hero__title}>
        YACHT <span>APES</span>
      </h1>
      <p className={s.hero__description}>Apes aRe eveRywhere</p>

      <div className={s.hero__container}>
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
            className={s.hero__image}
          />
        </picture>

        <Link
          className={s.hero__link_meet}
          to="mint"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          MEET APES
        </Link>
        {/* <a href="#mint" className={s.hero__link_meet}></a> */}
      </div>

      <p className={s.hero__text}>
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
    </div>
  );
};

export default Hero;

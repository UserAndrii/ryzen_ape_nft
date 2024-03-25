import React from 'react';
import Marquee from 'react-fast-marquee';

import s from './About.module.scss';
import Cross from '../../images/icons/Сross';

import aboutMob from '../../images/nft/about/about_mobile.png';
import aboutMob2x from '../../images/nft/about/about_mobile@2x.png';
import aboutTab from '../../images/nft/about/about_tablet.png';
import aboutTab2x from '../../images/nft/about/about_tablet@2x.png';
import aboutDesk from '../../images/nft/about/about_desktop.png';
import aboutDesk2x from '../../images/nft/about/about_desktop@2x.png';

interface IAboutProp {
  innerRef: React.Ref<HTMLDivElement>;
}

const About: React.FC<IAboutProp> = ({ innerRef }) => {
  return (
    <section className={s.about} id="about" ref={innerRef}>
      <div className={s.about__container}>
        <h2 className={s.about__title}>
          A Story that started with <span>one simple</span> <span>ape</span>
        </h2>

        <p className={s.about__content}>
          <span>WHO GOT</span> FED UP WITH BORING AND HYPOCRITIC COMMONPLACE
          THIS IS HOW THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE{' '}
          <span>YACHT</span>
        </p>

        <div className={s.about__text_container}>
          <Cross className={s.about__icon} />
          <p className={s.about__text}>
            EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS
            ARE RANDOMLY GENERATED BY USERS
          </p>
        </div>

        <picture>
          <source
            type="image/png"
            media="(min-width: 1280px)"
            srcSet={`${aboutDesk} 1x, ${aboutDesk2x} 2x`}
          />
          <source
            type="image/png"
            media="(min-width: 768px)"
            srcSet={`${aboutTab} 1x, ${aboutTab2x} 2x`}
          />
          <source
            type="image/png"
            media="(max-width: 767px)"
            srcSet={`${aboutMob} 1x, ${aboutMob2x} 2x`}
          />
          <img
            src={`${aboutMob}`}
            alt="A story one simple Ape"
            width={216}
            height={292}
            className={s.about_image}
            loading="lazy"
          />
        </picture>
      </div>

      <Marquee className={s.about_banner}>
        <div>
          <p>HAVE NO LIMITS</p>
          <Cross className={s.about__banner_icon} />
          <p>Break rules</p>
          <Cross className={s.about__banner_icon} />
          <p>Destroy stereotypes</p>
          <Cross className={s.about__banner_icon} />
        </div>
      </Marquee>
    </section>
  );
};

export default About;

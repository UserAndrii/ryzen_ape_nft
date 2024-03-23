import React from 'react';

import artsData from './artsData';
import s from './Arts.module.scss';

import SliderWrapper from '../SliderWrapper';

const Arts: React.FC = () => {
  return (
    <section className={s.arts}>
      <h2 className={s.arts__title}>COLLECTION</h2>

      <ul className={s.arts__list}>
        <SliderWrapper>
          {artsData.map(({ id, image, imageTab }) => (
            <li key={id} className={s.arts__item}>
              <picture>
                <source
                  type="image/png"
                  media="(min-width: 768px)"
                  srcSet={`${imageTab[0]} 1x, ${imageTab[1]} 2x`}
                />
                <source
                  type="image/png"
                  media="(max-width: 767px)"
                  srcSet={`${image[0]} 1x, ${image[1]} 2x`}
                />
                <img
                  src={`${image[0]}`}
                  alt="Apes"
                  width={216}
                  height={256}
                  className={s.arts__image}
                />
              </picture>
            </li>
          ))}
        </SliderWrapper>
      </ul>
    </section>
  );
};

export default Arts;

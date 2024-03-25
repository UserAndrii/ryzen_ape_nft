import React from 'react';

import artsData from './artsData';
import s from './Arts.module.scss';

import SliderWrapper from '../SliderWrapper';

const Arts: React.FC = () => {
  return (
    <section className={s.arts} id="arts">
      <h2 className={s.arts__title}>COLLECTION</h2>

      <div className={s.arts__slick}>
        <SliderWrapper>
          {artsData.map(({ id, image, imageTab }) => (
            <div key={id} className={s.arts__slide}>
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
                  alt="Ape collections"
                  width={216}
                  height={256}
                  className={s.arts__image}
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </SliderWrapper>
      </div>
    </section>
  );
};

export default Arts;

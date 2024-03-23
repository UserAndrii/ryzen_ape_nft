import React from 'react';
import cn from 'classnames';

import s from './FAQItem.module.scss';
import { IFAQItemProps } from '../../types';

const FAQItem: React.FC<IFAQItemProps> = ({
  active,
  id,
  title,
  description,
  image,
}) => {
  return (
    <div className={cn(s.card, { [s.card__active]: active })}>
      <div className={s.card__head}>
        <p className={cn(s.card__position, { [s.card__active]: active })}>
          [ {id} ]
        </p>
        <h3 className={cn(s.card__title, { [s.card__active]: active })}>
          {title}
        </h3>
      </div>

      <picture>
        <source
          type="image/png"
          media="(min-width: 768px)"
          srcSet={`${image?.[0]} 1x, ${image?.[1]} 2x`}
        />

        {active && (
          <img
            src={`${image?.[0]}`}
            alt="Ape"
            width={216}
            height={292}
            className={s.card__image}
          />
        )}
      </picture>

      {active && <p className={s.card__text}>{description}</p>}
    </div>
  );
};

export default FAQItem;

import React from 'react';
import cn from 'classnames';

import s from './FAQItem.module.scss';
import { IFAQItemProps } from '../../types';

const FAQItem: React.FC<IFAQItemProps> = ({
  active,
  id,
  title,
  description,
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

      {active && <p className={s.card__text}>{description}</p>}
    </div>
  );
};

export default FAQItem;

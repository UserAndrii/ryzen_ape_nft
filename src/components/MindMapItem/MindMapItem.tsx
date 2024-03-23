import React from 'react';
import s from './MindMapItem.module.scss';
import Arrow from '../../images/icons/Arrow';
import { IMapProps } from '../../types';
import cn from 'classnames';

const MindMapItem: React.FC<IMapProps> = ({ title, text, link }) => {
  return link ? (
    <a
      href={link}
      rel="noopener noreferrer nofollow"
      target="_blank"
      className={cn(s.map__content, s.map__link)}
    >
      <Arrow className={s.map__icon} />
      <h3
        className={s.map__title}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
    </a>
  ) : (
    <div className={s.map__content}>
      <p className={s.map__text}>{text}</p>
      <h3 className={s.map__title}>{title}</h3>
    </div>
  );
};

export default MindMapItem;

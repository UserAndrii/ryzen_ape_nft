import React from 'react';
import s from './Map.module.scss';
import Arrow from '../../images/icons/Arrow';
import { IMapProps } from '../../types';

const Map: React.FC<IMapProps> = ({ title, text, link }) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer nofollow"
      target="_blank"
      className={s.map}
    >
      <div className={s.map__content}>
        <p className={s.map__text}>{text}</p>

        <Arrow className={s.map__icon} />

        <h3 className={s.map__title}>{title}</h3>
      </div>
    </a>
  );
};

export default Map;

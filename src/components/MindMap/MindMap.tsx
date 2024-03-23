import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import s from './MindMap.module.scss';
import MindMapItem from '../MindMapItem';
import mindData from './mindData';
import SliderWrapper from '../SliderWrapper';

const MindMap: React.FC = () => {
  return (
    <section className={s.map} id="m-map">
      <h2 className={s.map__title}>Mind Map</h2>

      <ul className={s.map__list_slider}>
        <SliderWrapper>
          {mindData.map(({ title, text, link }, index) => (
            <li key={index} style={{ margin: '0 auto' }}>
              <MindMapItem title={title} text={text} link={link} />
            </li>
          ))}
        </SliderWrapper>
      </ul>

      <ul className={s.map__list}>
        {mindData.map(({ title, text, link }, index) => (
          <li key={index}>
            <MindMapItem title={title} text={text} link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MindMap;

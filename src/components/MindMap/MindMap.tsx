import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Map from '../Map';

import s from './MindMap.module.scss';
import mindData from './mindData';

const MindMap: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const goToNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
  };

  return (
    <section className={s.map}>
      <h2 className={s.map__title}>Mind Map</h2>

      <ul className={s.map__list_slider}>
        <Slider ref={sliderRef} {...settings}>
          {mindData.map(({ title, text, link }, index) => (
            <li key={index}>
              <Map title={title} text={text} link={link} />
            </li>
          ))}
        </Slider>
      </ul>

      <ul className={s.map__list}>
        {mindData.map(({ title, text, link }, index) => (
          <li key={index}>
            <Map title={title} text={text} link={link} />
          </li>
        ))}
      </ul>

      <div className={s.map__btn_container}>
        <button
          type="button"
          aria-label="Prev slide"
          className={s.map__buttom}
          onClick={goToPrevSlide}
        >
          Prev
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className={s.map__buttom}
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default MindMap;

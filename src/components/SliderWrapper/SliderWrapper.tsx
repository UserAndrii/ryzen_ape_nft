import React, { useRef } from 'react';
import Slider from 'react-slick';

import SlideControlButtons from '../SlideControlButtons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ISliderProp } from '../../types';

const SliderWrapper: React.FC<ISliderProp> = ({ children }) => {
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
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    fade: true,
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      <SlideControlButtons
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
      />
    </>
  );
};

export default SliderWrapper;

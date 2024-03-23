import React from 'react';
import s from './SlideControlButtons.module.scss';

import { ISlideControlProps } from '../../types';

const SlideControlButtons: React.FC<ISlideControlProps> = ({
  goToPrevSlide,
  goToNextSlide,
}) => {
  return (
    <div className={s.btn__container}>
      <button
        type="button"
        aria-label="Prev slide"
        className={s.btn}
        onClick={goToPrevSlide}
      >
        Prev
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className={s.btn}
        onClick={goToNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default SlideControlButtons;

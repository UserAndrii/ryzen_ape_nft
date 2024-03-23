import React, { useState } from 'react';

import s from './FAQ.module.scss';

import FAQItem from '../FAQItem';
import FAQData from './FAQData';

const FAQ: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <section className={s.faq}>
      <h2 className={s.faq__title}>FAQ</h2>

      <ul>
        {FAQData.map(({ id, title, description, image }) => (
          <li key={id} onClick={() => setSelectedCard(id)}>
            <FAQItem
              active={selectedCard === id}
              id={id}
              title={title}
              description={description}
              image={image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;

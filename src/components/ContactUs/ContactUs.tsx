import React from 'react';

import s from './ContactUs.module.scss';
import ContactForm from '../ContactForm';
import Cross from '../../images/icons/Сross';

const ContactUs: React.FC = () => {
  return (
    <section className={s.contact} id="mint">
      <h2 className={s.contact__title}>Are you in?</h2>

      <div className={s.contact__text_container}>
        <Cross className={s.contact__icon} />
        <p className={s.contact__text}>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </p>
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactUs;

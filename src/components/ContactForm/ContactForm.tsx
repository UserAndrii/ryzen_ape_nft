import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';

import cn from 'classnames';
import s from './ContactForm.module.scss';
import Discord from '../../images/icons/Discord';
import Metamask from '../../images/icons/Metamask';

import { IContactFormValue } from '../../types';
import { contactFormSchema } from '../../helpers';

const ContactForm: React.FC = () => {
  const [isMinted, setIsMinted] = useState(false);

  const initialValues: IContactFormValue = {
    discord: '',
    metamask: '',
  };

  const onSubmit = (
    value: IContactFormValue,
    { resetForm }: FormikHelpers<IContactFormValue>
  ) => {
    console.log('Discord: ', value.discord.toUpperCase());
    console.log('MetaMask: ', value.metamask.toUpperCase());
    setIsMinted(true);

    setTimeout(() => {
      setIsMinted(false);
      resetForm();
    }, 4000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormSchema}
      onSubmit={onSubmit}
    >
      {({ errors: { discord, metamask }, touched }) => {
        return (
          <Form className={s.form}>
            <div className={s.form__input_wrapper}>
              <div className={s.form__icon_container}>
                <Discord className={s.form__icon} />
              </div>

              <div className={s.form__field}>
                <Field
                  id="discord"
                  name="discord"
                  type="text"
                  className={cn(s.form__input, {
                    [s.error]: touched.discord && discord,
                  })}
                  autoComplete="off"
                  placeholder="@username"
                />
                <ErrorMessage
                  name="discord"
                  component="p"
                  className={s.form__error}
                />
              </div>
            </div>

            <div className={s.form__input_wrapper}>
              <div className={s.form__icon_container}>
                <Metamask />
              </div>

              <div className={s.form__field}>
                <Field
                  id="metamask"
                  name="metamask"
                  type="text"
                  className={cn(s.form__input, {
                    [s.error]: touched.metamask && metamask,
                  })}
                  autoComplete="off"
                  placeholder="Wallet address"
                />
                <ErrorMessage
                  name="metamask"
                  component="p"
                  className={s.form__error}
                />
              </div>
            </div>

            <button
              type="submit"
              aria-label="Submit form"
              className={s.form__submit}
            >
              {discord || metamask ? 'ERROR' : isMinted ? 'MINTED' : 'MINT'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;

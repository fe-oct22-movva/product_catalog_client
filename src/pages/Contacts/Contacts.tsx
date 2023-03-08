import React from 'react';
import styles from '../Contacts/Contacts.module.scss';
import {Breadcrumbs} from '../../components/Breadcrumbs';

export const Contacts: React.FC = () => {
  return (
    <>
      <head>
        <title>Contacts</title>
      </head>
      <div className="main-container">
        <Breadcrumbs />
        <section className={styles.contacts}>
          <h1 className={styles.contacts__title}>Contacts</h1>
          <p>Page is waiting for content</p>
        </section>
      </div>
    </>
  );
};

import React from 'react';
import styles from './Contacts.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PersonCard } from '../../components/PersonCard/PersonCard';

export const Contacts: React.FC = () => {
  return (
    <>
      <head>
        <title>Contacts</title>
      </head>

      <div className="main-container">
        <Breadcrumbs />
        <div className='grid grid--mobile grid--tablet grid--desktop'>
        <div className={styles.contacts}>
          <h1 className={styles.contacts__title}>
            Contacts
          </h1>
          <div className={styles.contacts__description}>
            <p className={styles.contacts__description__text}>
              We are creative and motivated Full-Stack Developers, who created this online store. You can contact with any of us using the links below.
            </p>
          </div>

          <div className={styles.cards}>
            <PersonCard
              photo=''
              name='Artem Hrechuk'
              linkedinUrl='https://www.linkedin.com/in/artem-hrechuk-9b0222265/'
              githubUrl='https://github.com/official-artem'
            />

            <PersonCard
              photo=''
              name='Maksim Levchenko'
              linkedinUrl='https://www.linkedin.com/in/maksim-levchenko-45238b265/'
              githubUrl='https://github.com/llllewvvaa'
            />

            <PersonCard
              photo=''
              name='Olena Yanovska'
              linkedinUrl='https://www.linkedin.com/in/olena-yanovska-69a31b265/'
              githubUrl='https://github.com/olena-yanovska'
            />

            <PersonCard
              photo=''
              name='Vika Kravchenko'
              linkedinUrl='https://www.linkedin.com/in/viktoriia-kravchenko-5110b1265/'
              githubUrl='https://github.com/viktoriia-kravchenko'
            />

            <PersonCard
              photo=''
              name='Volodymyr Arkanov'
              linkedinUrl='https://www.linkedin.com/in/volodymyr-arkanov-b1a116265/'
              githubUrl='https://github.com/vladimir-arkanov'
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

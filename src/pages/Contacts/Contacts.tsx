import React from 'react';
import styles from './Contacts.module.scss';
import Maksim from '../../assets/images/contacts/maksim.jfif';
import Viktoriia from '../../assets/images/contacts/viktoriia.jfif';
import Volodymyr from '../../assets/images/contacts/volodymyr.jpg';
import Artem from '../../assets/images/contacts/artem.jpg';
import Olena from '../../assets/images/contacts/olena.jpg';
import {Breadcrumbs} from '../../components/Breadcrumbs';
import {PersonCard} from '../../components/PersonCard/PersonCard';

export const Contacts: React.FC = () => {
  return (
    <>
      <head>
        <title>Contacts</title>
      </head>

      <div className="main-container">
        <Breadcrumbs />
          <div className={styles.contacts}>
            <h1 className={styles.contacts__title}>Contacts</h1>
            <div className={styles.contacts__description}>
              <p className={styles.contacts__description__text}>
                We are creative and motivated Full-Stack Developers, who created
                this online store. You can contact with any of us using the
                links below.
              </p>
            </div>

            <div className={styles.cards}>
              <PersonCard
                photo={Artem}
                name="Artem Hrechuk"
                linkedinUrl="https://www.linkedin.com/in/artem-hrechuk-9b0222265/"
                githubUrl="https://github.com/official-artem"
                douUrl="https://dou.ua/users/artem-job/"
              />

              <PersonCard
                photo={Maksim}
                name="Maksim Levchenko"
                linkedinUrl="https://www.linkedin.com/in/maksim-levchenko-45238b265/"
                githubUrl="https://github.com/llllewvvaa"
                douUrl="https://dou.ua/users/maksim-levchenko-2/"
              />

              <PersonCard
                photo={Olena}
                name="Olena Yanovska"
                linkedinUrl="https://www.linkedin.com/in/olena-yanovska-69a31b265/"
                githubUrl="https://github.com/olena-yanovska"
                douUrl="https://dou.ua/users/olena-yanovska/"
              />

              <PersonCard
                photo={Viktoriia}
                name="Vika Kravchenko"
                linkedinUrl="https://www.linkedin.com/in/viktoriia-kravchenko-5110b1265/"
                githubUrl="https://github.com/viktoriia-kravchenko"
                douUrl="https://dou.ua/users/viktoriia-kravchenko-1/"
              />

              <PersonCard
                photo={Volodymyr}
                name="Volodymyr Arkanov"
                linkedinUrl="https://www.linkedin.com/in/volodymyr-arkanov-b1a116265/"
                githubUrl="https://github.com/vladimir-arkanov"
                douUrl="https://dou.ua/users/volodymyr-arkanov/"
              />
            </div>
          </div>
       </div>
    </>
  );
};

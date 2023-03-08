import styles from './PersonCard.module.scss';

interface Props {
  photo: string;
  name: string;
  linkedinUrl: string;
  githubUrl: string;
}

export const PersonCard: React.FC<Props> = ({
  photo,
  name,
  linkedinUrl,
  githubUrl,
}) => {
  return (
    <div className={styles.person}>
      <img className={styles.person__photo} src={photo} alt="person photo" />
      <h3 className={styles.person__name}>{name}</h3>
      <div className={styles.person__description}>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.person__link}>
          Linkedin
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className={styles.person__link}>
          Dou
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.person__link}>
          Github
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className={styles.person__link}>
          Djinni
        </a>
      </div>
    </div>
  );
};

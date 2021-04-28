import format from 'date-fns/format';
import styles from './styles.module.scss';


export function Header() {
  const currentDate = format(new Date(), 'iii, MMMM do');


  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr Logo" />

      <p>Always the best way to listen</p>

      <span>{currentDate}</span>
    </header>
  );
}

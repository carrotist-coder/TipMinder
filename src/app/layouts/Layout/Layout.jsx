import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

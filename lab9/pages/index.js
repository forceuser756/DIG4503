import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/css/css.module.css';

const Home = () => {
  return (
      <div className={styles.body}>
        <Head>
          <title>Pokemon Database</title>
        </Head>
        <div>
          <h1 className={styles.head}>Pokemon Database</h1>
          <p><Link href="/Name">
            <a className={styles.a}>Search by Name</a>
          </Link></p>
          <p><Link href="/id">
            <a className={styles.a}>Search by ID</a>
          </Link></p>
          <p><Link href="/Type">
            <a className={styles.a}>Search by Type</a>
          </Link></p>
        </div>
      </div>
    );
  }

export default Home;

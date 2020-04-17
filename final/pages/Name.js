import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/css/css.module.css';
import NameSearch from '../components/NameSearch';

const Name= ()=>{
    return(
        <div>
        <h1 className={styles.head}>NameSearch</h1>
            <Head>
                <title>NameSearch</title>
            </Head>
            <Link href="/index">
                <a className={styles.a}>Home</a>
            </Link>
            <br/>
            <Link href="/id">
                <a className={styles.a}>Search by ID</a>
            </Link>

            <br/>

            <Link href="/Type">
                <a className={styles.a}>Search by type</a>
            </Link>

            <br/>

            <NameSearch/>
            <div id="reportingArea">

            </div>
        </div>
    )
}

export default Name;

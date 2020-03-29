import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/css/css.module.css';
import IdSearch from '../components/IdSearch';

const ID= ()=>{
    return(
        <div>
        <h1 className={styles.head}>IdSearch</h1>
            <Head>
                <title>IdSearch</title>
            </Head>
            <Link href="/index">
                <a className={styles.a}>Home</a>
            </Link>
            <br/>
            <Link href="/Name">
                <a className={styles.a}>Search by name</a>
            </Link>

            <br/>

            <Link href="/Type">
                <a className={styles.a}>Search by type</a>
            </Link>

            <br/>

            <IdSearch/>
            <div id="reportingArea">

            </div>
        </div>
    )
}

export default ID;

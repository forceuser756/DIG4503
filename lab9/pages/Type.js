import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/css/css.module.css';
import "./api/pokemon/typeList/[typeList].js";
import TypeSearch from '../components/TypeSearch/index.js';

const Type= ()=>{
    return(
        <div>
        <h1 className={styles.head}>TypeSearch</h1>
            <Head>
                <title>TypeSearch</title>
            </Head>
            <Link href="/index">
                <a className={styles.a}>Home</a>
            </Link>
            <br/>
            <Link href="/Name">
                <a className={styles.a}>Search by name</a>
            </Link>

            <br/>

            <Link href="/id">
                <a className={styles.a}>Search by ID</a>
            </Link>

            <br/>

            <TypeSearch/>
            <div id="reportingArea">

            </div>
        </div>
    )
}

export default Type;

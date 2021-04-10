import styles from "../../styles/Home.module.scss";
import Link from "next/link"
import Head from 'next/head'

function Header() {

    return (
        <div className={ styles.header}>
            <Head>
                <title>Mochiko</title>
            </Head>
            <Link href="/">
                <a className= {styles.h1a}> 🐶 Mochiko</a>
            </Link>
            <nav className={ styles.nav}>
                <Link href="/mochi">
                    <a className={ styles.ahref }>Moch</a>
                </ Link>
                <Link href="/gochi">
                    <a className={ styles.ahref }>Goch</a>
                </Link>
                <Link  href="/rochi">
                    <a className={ styles.ahref }>Roch</a>
                </Link>
            </nav>
        </div>
    );
}

export default Header;
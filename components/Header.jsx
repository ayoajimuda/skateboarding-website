import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/logo.png" alt="Slam Logo" className={styles.slam} width={120} height={40} />
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/tricks">Tricks Library</Link></li>
                    <li><Link href="/spots">Skate Spots</Link></li>
                    <li><Link href="/guides">Guides & Blogs</Link></li>
                    <li><Link href="/customize">Customize</Link></li>
                    <li><Link href="/connect">Connect</Link></li>
                </ul>
            </nav>
            <button className={styles.profileButton}>
                <svg viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
                </svg>
            </button>
        </header>
    );
};

export default Header;
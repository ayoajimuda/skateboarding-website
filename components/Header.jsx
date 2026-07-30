import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="header">
            <div className= "slam-logo">
                <Image src="/images/logo.png" alt="Slam Logo" className="Logo" width={40} height={40} />
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/tricks">tricks library</Link></li>
                    <li><Link href="/spots">skate spots</Link></li>
                    <li><Link href="/guides">guides/blogs</Link></li>
                    <li><Link href="/customize">customize</Link></li>
                    <li><Link href="/connect">connect</Link></li>
                </ul>
            </nav>
            <button className="profile-button">
                <svg viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
                </svg>
            </button>
        </header>
    );
};

export default Header;
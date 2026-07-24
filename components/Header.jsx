import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <Image src="/images/logo.png" alt="Slam Logo" className="slam" width={120} height={40} />
            </div>
            <nav className="nav">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/tricks">Tricks Library</Link></li>
                    <li><Link href="/spots">Skate Spots</Link></li>
                    <li><Link href="/guides">Guides/Blogs</Link></li>
                    <li><Link href="/customize">Customize</Link></li>
                    <li><Link href="/connect">Connect</Link></li>
                </ul>
            </nav>
            <button className="profile-btn">Profile</button>
        </header>
    );
};

export default Header;
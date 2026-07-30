import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-2 bg-white border-b border-gray-100">
            <div className="flex items-center">
                <img src="/images/logo.png" alt="Slam Logo" className="h-16 w-auto rounded-lg" />
            </div>
            <nav>
                <ul className="flex gap-10 list-none">
                    <li><Link href="/" className="text-gray-900 text-lg font-medium hover:text-green-800">Home</Link></li>
                    <li><Link href="/tricks" className="text-gray-900 text-lg font-medium hover:text-green-800">Tricks</Link></li>
                    <li><Link href="/spots" className="text-gray-900 text-lg font-medium hover:text-green-800">Skateparks</Link></li>
                    <li><Link href="/blogs" className="text-gray-900 text-lg font-medium hover:text-green-800">Guides</Link></li>
                    <li><Link href="/connect" className="text-gray-900 text-lg font-medium hover:text-green-800">Connect</Link></li>
                    <li><Link href="/customize" className="text-gray-900 text-lg font-medium hover:text-green-800">Customise</Link></li>
                </ul>
            </nav>
            <button className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                </svg>
            </button>
        </header>
    );
};

export default Header;
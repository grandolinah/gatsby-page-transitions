import React from 'react';
import { Link } from 'gatsby';

const NAVIGATION = [
  {
    title: 'home',
    path: '/',
    additionalClass: 'text-pink-500'
  },
  {
    title: 'page one',
    path: '/page-one',
    additionalClass: 'text-cyan-500'
  },
  {
    title: 'page two',
    path: '/page-two',
    additionalClass: 'text-indigo-500'
  }
]

const Header = () => (
  <header className="w-full p-4 bg-black">
    <nav>
      <ul className="flex align-center justify-start">
        {NAVIGATION.map(item => <li>
          <Link to={item.path} replace className={`mx-2 ${item.additionalClass}`}>{item.title}</Link>
        </li>)}
      </ul>
    </nav>
  </header>
);

export default Header;

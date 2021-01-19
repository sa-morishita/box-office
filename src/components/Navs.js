import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => (
  <ul>
    {LINKS.map(items => (
      <li key={items.to}>
        <Link to={items.to}>{items.text}</Link>
      </li>
    ))}
  </ul>
);

export default Navs;

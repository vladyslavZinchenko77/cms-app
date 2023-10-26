

import React from 'react'
import Tab from '../Tab/Tab';
import "./Sider.scss"
import { Link } from 'react-router-dom';

const Sider = ({tab}) => {
  return (
    <nav className='sider__nav'>
    <Link className='sider__nav-logo' to='/'>Dummy Logo</Link >
    <ul className='sider__nav-list' >
      {tab
        .sort((a, b) => a.order - b.order)
        .map((tab) => (
          <li key={tab.id} >
            <Tab id={tab.id} title={tab.title} path={tab.path} />
          </li>
        ))}
    </ul>
  </nav>
);
}

export default Sider
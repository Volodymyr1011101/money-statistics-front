import React from 'react'
import { MdAttachMoney, MdHome, MdOutlineTimeline } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css'

const Navigation = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
    const linkClass = ({ isActive }) =>
      isActive ? `${s.link} ${s.active}` : s.link;
  
    return (
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <NavLink to="/" className={linkClass} >
              <span className={s.icon}><MdHome /></span>
              <span className={s.label}>Home</span>
            </NavLink>
          </li>
  
          <li>
            <NavLink to="/statistics" className={linkClass}>
              <span className={s.icon}><MdOutlineTimeline /></span>
              <span className={s.label}>Statistics</span>
            </NavLink>
          </li>
  
          {isMobile && (
            <li>
              <NavLink to="/currency" className={linkClass} >
                <span className={s.icon}><MdAttachMoney /></span>
                <span className={s.label}>Currency</span>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    );
  };

export default Navigation

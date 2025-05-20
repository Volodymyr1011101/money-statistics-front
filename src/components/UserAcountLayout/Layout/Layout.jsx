import React from 'react'
import s from '../Layout/Layout.module.css'
import Header from '../Header/Header.jsx'
import SideBar from '../SideBar/SideBar.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div >
      <Header />
      <div className={s.wrapper_layout}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout

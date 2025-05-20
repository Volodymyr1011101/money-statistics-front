import React from 'react'
import Navigation from '../Navigation/Navigation'
import Balance from '../Balance/Balance'
import Currency from '../Currency/Currency'
import s from '../SideBar/SideBar.module.css'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'

const SideBar = () => {
  const location = useLocation();
  const isMobileUp = useMediaQuery({query: '(max-width: 767px)'})
  const isTabletUp = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });
  const isDesctopUp = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <aside className={s.sidebar_wrapper}>
      {isMobileUp && (
        <div className={s.sidebar_mob}>
          <Navigation />
          {location.pathname === '/' && <Balance />}
        </div>
      )}

      {isTabletUp && (
        <>
          <div className={s.Tab_left}>
            <Navigation />
            <Balance />
          </div>
          <div className={s.right}>
            <Currency />
          </div>
        </>
      )}

      {isDesctopUp && (
        <>
          <div className={s.desc_sidebar}>
            <Navigation />
            <div className={s.desc_bal_cur}>
              <Balance />
              <Currency />
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

export default SideBar

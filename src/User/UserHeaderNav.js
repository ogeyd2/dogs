import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { UilAnalytics } from '@iconscout/react-unicons'
import { UilImages } from '@iconscout/react-unicons'
import { UilPlus } from '@iconscout/react-unicons'
import { UilSignout } from '@iconscout/react-unicons'
import styles from './UserHeaderNav.module.css'
import useMedia from '../Hooks/useMedia'

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const { pathname } = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {' '}
        </button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta">
          {' '}
          <UilImages />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <UilAnalytics />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <UilPlus />
          {mobile && 'Adicionar fotos'}
        </NavLink>
        <button onClick={userLogout}>
          <UilSignout />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav

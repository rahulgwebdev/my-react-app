import React from 'react'
import styles from './index.module.css'
import classNames from 'classnames'

interface INavbarLogoProps {
  children?: React.ReactNode
}

const NavbarLogo = ({ children }: INavbarLogoProps) => {
  return (
    <div
      className={classNames({
        [styles.navbarLogo]: true,
      })}
    >
      {children}
    </div>
  )
}

export default NavbarLogo

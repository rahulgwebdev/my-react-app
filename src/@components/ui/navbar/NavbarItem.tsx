import React from 'react'
import styles from './index.module.css'

interface INavbarItemProps {
  children?: React.ReactNode
}

const NavbarItem = ({ children }: INavbarItemProps) => {
  return <div className={styles.navbarItem}>
    {children}
  </div>
}

export default NavbarItem

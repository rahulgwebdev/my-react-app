import React from 'react'
import classNames from 'classnames'
import styles from './index.module.css'
import { useIsActive } from './NavbarProvider'

interface INavbarMenuProps {
  children?: React.ReactNode
}

const NavbarMenu = ({ children }: INavbarMenuProps) => {
  const isActive = useIsActive()
  return (
    <div
      className={classNames(styles.navbarMenu, {
        [styles.isActive]: isActive,
      })}
    >
      {children}
    </div>
  )
}

export default NavbarMenu

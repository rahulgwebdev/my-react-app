import React from 'react'
import styles from './index.module.css'
import { NavbarProvider } from './NavbarProvider'

interface INavbarProps {
  children?: React.ReactNode
}

const Navbar = ({ children }: INavbarProps) => {
  return (
    <NavbarProvider>
      <nav className={styles.navbar}>{children}</nav>
    </NavbarProvider>
  )
}

export default Navbar

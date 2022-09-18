import classNames from 'classnames'
import React from 'react'
import styles from './index.module.css'
import { useToggle, useIsActive } from './NavbarProvider'

const NavbarBurger = () => {
  const toggle = useToggle()
  const isActive = useIsActive()
  return (
    <a
      role='button'
      className={classNames(styles['navbarBurger'], {
        [styles['isActive']]: isActive,
      })}
      aria-label='menu'
      aria-expanded='false'
      onClick={(e) => {
        e.preventDefault()
        if (typeof toggle === 'function') toggle()
      }}
    >
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </a>
  )
}

export default NavbarBurger

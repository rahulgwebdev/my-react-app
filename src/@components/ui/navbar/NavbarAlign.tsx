import React from 'react'
import styles from './index.module.css'
import classNames from 'classnames'

interface INavbarAlignProps {
  children?: React.ReactNode
  align?: 'start' | 'end'
}

const NavbarAlign = ({ children, align }: INavbarAlignProps) => {
  return (
    <div
      className={classNames({
        [styles.navbarStart]: align === 'start',
        [styles.navbarEnd]: align === 'end',
      })}
    >
      {children}
    </div>
  )
}

NavbarAlign.defaultProps = {
  align: 'start',
  children: undefined,
}

export default NavbarAlign

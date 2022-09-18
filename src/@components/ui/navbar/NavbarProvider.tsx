import React, { useContext, useMemo, useState } from 'react'

interface INavbarContext {
  isActive: boolean
  toggle?: () => void
}

const NavbarContext = React.createContext<INavbarContext>({ isActive: false })

export const NavbarProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false)

  const value: INavbarContext = useMemo(
    () => ({
      isActive,
      toggle: () => setIsActive((value) => !value),
    }),
    [isActive],
  )

  return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
}

export const useToggle = () => {
  const context = useContext(NavbarContext)
  return context.toggle
}

export const useIsActive = () => {
  const context = useContext(NavbarContext)
  return context.isActive
}

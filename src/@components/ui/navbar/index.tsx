import NavbarInternal from './Navbar'
import NavbarAlign from './NavbarAlign'
import NavbarItem from './NavbarItem'
import NavbarMenu from './NavbarMenu'
import NavbarBurger from './NavbarBurger'
import NavbarLogo from './NavbarLogo'

const Navbar = Object.assign(NavbarInternal, {
    Menu: NavbarMenu,
    Item: NavbarItem,
    Align: NavbarAlign,
    Burger: NavbarBurger,
    Logo: NavbarLogo
})


export { Navbar }

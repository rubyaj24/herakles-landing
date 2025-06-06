import { Link } from "react-router-dom";
import Logo from '/logo.svg';

const NavBar = () => {

    const menuItems = [
    {'name':'HOME', 'to':'/'},
    {'name':'ABOUT', 'to':'/about'},
    {'name':'COLLEGE', 'to':'/college'},
    {'name':'TEAM', 'to':'/team'},
    {'name':'NEWS', 'to':'/news'},
    {'name':'GALLERY', 'to':'/gallery'},
    {'name':'HISTORY', 'to':'/history'},
    {'name':'PARTNERS', 'to':'/partners'},
    {'name':'CONTACT', 'to':'/contact'}

  ];
  return (
    <nav className='flex z-10 bg-gradient-to-b from-black/100 via-black/80 to-black/0 text-white px-6 items-center justify-between m-auto'>
        <Link to="/">
            <img src={Logo} alt="Logo" className="h-30" />
        </Link>
        <ul className='flex space-x-4 p-6 gap-10'>
            {menuItems.map((items, index) => (
                <li key={index}>
                    <Link to={`${items.to}`} className='text-sm font-medium scroll-smooth hover:text-red-500 hover:scale-110 transition-all duration-300'>
                        {items.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar
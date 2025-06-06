import '../index.css';
import { useState } from 'react';
import Logo from '/logo.svg';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {'name':'HOME', 'to':'/home'},
    {'name':'ABOUT', 'to':'/about'},
    {'name':'TEAM', 'to':'/team'},
    {'name':'NEWS', 'to':'/news'},
    {'name':'GALLERY', 'to':'/gallery'},
    {'name':'HISTORY', 'to':'/history'},
    {'name':'PARTNERS', 'to':'/partners'},
    {'name':'CONTACT', 'to':'/contact'}
  ];

  return (
    <>
      <nav className="flex z-30 bg-gradient-to-b from-black/100 via-black/80 to-black/0 text-white px-6 py-4 items-center justify-between relative">
        <button 
          className="text-sm font-medium hover:text-red-500 hover:scale-110  transition-all duration-300"
          aria-label="Toggle Menu" 
          onClick={toggleMenu}
        >
          MENU
        </button>
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-[15vh]" aria-label='Logo' />
        </Link>
        <div className="w-12"></div> {/* Spacer for centering logo */}
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40" 
          onClick={toggleMenu}
        ></div>
      )}

      {/* Drawer */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-black/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-white font-medium">MENU</h2>
          <button 
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 text-xl"
          >
            <IoIosCloseCircleOutline className='text-red-500 transition-all duration-300 hover:scale-120' />
          </button>
        </div>
        <ul className="p-6 space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="block text-white hover:text-gray-300 py-2 px-2 text-lg font-medium hover:bg-gray-800 rounded-lg hover:scale-110 transition-all duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 left-0 w-full p-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} HERAKLES RACING. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </>
  );
}

export default NavBarMobile;
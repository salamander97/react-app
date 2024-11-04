import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/icons/logo.png';
import '../styles/style.css';

const Header = () => {
    const HamburgerMenu = () => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
                {isOpen && (
                    <ul className="absolute top-full right-0 bg-[#B8860B] shadow-md rounded-lg mt-2 p-4 space-y-2">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Trang Chủ</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Về Chúng Tôi</NavLink></li>
                        <li><NavLink to="/products" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Sản Phẩm</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Liên Hệ</NavLink></li>
                    </ul>
                )}
            </div>
        );
    };

    return (
        <header className="bg-[#B8860B] w-full px-4 py-3 fixed top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <div className="logo w-21 h-21 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
                        <img src={logo} alt="logo" className="w-20 h-20 rounded-full" />
                    </div>
                    <NavLink to="/" className="flex items-center">
                        <h1 className="header-title font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-100  to-yellow-400" style={{ fontFamily: 'UTM Bienvenue' }}>
                            ĐỒNG MỸ NGHỆ VIỆT TRUNG
                        </h1>
                    </NavLink>
                </div>
                <div className="font-philosopher text-xl navigation flex items-center ">
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Trang Chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Về Chúng Tôi</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Sản Phẩm</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? 'menu-link active' : 'menu-link'}>Liên Hệ</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <HamburgerMenu />
                </div>
            </div>
            <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-1001">
        {/* Nút gọi điện thoại */}
        <a href="tel:0348266829" className="w-12 h-12 rounded-full bg-[#B8860B] text-white flex items-center justify-center hover:bg-[#916D0A] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        {/* Nút email */}
        <a href="mailto:dongmyngheviettrung@gmail.com" className="w-12 h-12 rounded-full bg-[#B8860B] text-white flex items-center justify-center hover:bg-[#916D0A] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

        </header>
    );
};

export default Header;

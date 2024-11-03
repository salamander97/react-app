import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
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
                        <h1 className="header-title text-white font-bold text-3xl" style={{ fontFamily: 'UTM Bienvenue' }}>
                            ĐỒNG MỸ NGHỆ VIỆT TRUNG
                        </h1>
                    </NavLink>
                </div>
                <div className="navigation flex items-center">
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
        </header>
    );
};

export default Header;

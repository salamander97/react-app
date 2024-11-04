import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/icons/logo.png';
import '../styles/style.css';

const Header = () => {
    const HamburgerMenu = () => {
        const [isOpen, setIsOpen] = useState(false);

        const menuVariants = {
            closed: {
                opacity: 0,
                x: '100%',
                transition: { duration: 0.3 }
            },
            open: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.3 }
            }
        };

        const menuItemVariants = {
            closed: { x: 20, opacity: 0 },
            open: i => ({
                x: 0,
                opacity: 1,
                transition: { delay: i * 0.1, duration: 0.3 }
            })
        };

        const menuItems = [
            { path: '/', label: 'Trang Chủ' },
            { path: '/about', label: 'Về Chúng Tôi' },
            { path: '/products', label: 'Sản Phẩm' },
            { path: '/contact', label: 'Liên Hệ' }
        ];

        return (
            <div className="hamburger-container">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-600 hover:bg-yellow-700 transition-colors"
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle menu"
                >
                    <svg className=" hamburger-bar h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            className="absolute top-full right-0 w-33 bg-gradient-to-b from-[#B8860B] to-[#986D0A] shadow-xl rounded-lg mt-2 overflow-hidden"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            {menuItems.map((item, i) => (
                                <motion.li
                                    key={item.path}
                                    variants={menuItemVariants}
                                    custom={i}
                                    className="border-b border-yellow-500/30 last:border-none"
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block py-3 px-4 text-white hover:bg-yellow-600/50 rounded-md transition-colors ${isActive ? 'bg-yellow-600/50' : ''
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <>
            <header className="bg-[#B8860B] w-full px-4 py-3 fixed top-0 left-0 z-50">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo and Title Container */}
                    <div className="logo-title-container">
                        <div className="logo">
                            <img src={logo} alt="logo" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <NavLink to="/" className="flex items-center">
                            <h1 className="header-title">
                                ĐỒNG MỸ NGHỆ VIỆT TRUNG
                            </h1>
                        </NavLink>
                    </div>

                    {/* Navigation */}
                    <div className="font-philosopher navigation flex items-center">
                        <nav className="hidden md:block">
                            <ul className="flex space-x-4 lg:space-x-6">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `menu-link ${isActive ? 'active' : ''}`
                                        }
                                    >
                                        Trang Chủ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `menu-link ${isActive ? 'active' : ''}`
                                        }
                                    >
                                        Về Chúng Tôi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/products"
                                        className={({ isActive }) =>
                                            `menu-link ${isActive ? 'active' : ''}`
                                        }
                                    >
                                        Sản Phẩm
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `menu-link ${isActive ? 'active' : ''}`
                                        }
                                    >
                                        Liên Hệ
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <HamburgerMenu />
                    </div>
                </div>
            </header>

            {/* Contact Buttons - Vertically centered */}
            <div className="contact-buttons">
                <motion.a
                    href="tel:0348266829"
                    className="contact-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </motion.a>

                <motion.a
                    href="mailto:dongmyngheviettrung@gmail.com"
                    className="contact-button"
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </motion.a>
            </div>
        </>
    );
};

export default Header;
// import React from 'react'
import { useState } from 'react';
import s from './Header.module.scss'

import { Link } from 'react-router-dom';

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
        setIsActive(prev => !prev)
    }

    const closeMenu =() => {
        setIsActive(false)
    }
    
    return (
        <header className={s.header}>
            <div className="container">
                <nav className={s.nav}>

                    <Link to="/" className={s.logo}>
                        <img src="/logo.svg" alt="logo" />
                    </Link>

                    <div className={`${s.menu} ${isActive ? s.active : ''}`}>
                        <Link onClick={closeMenu} to="/">Home</Link>
                        <Link onClick={closeMenu} to="/about">About us</Link>
                        <Link onClick={closeMenu} to="/service">Service</Link>
                        <Link onClick={closeMenu} to="/projects">Projects</Link>
                        <Link onClick={closeMenu} to="/blog">Blog</Link>
                    </div>

                    <button className={s.nav_btn}>
                        Let’s Talk

                        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 3C10.22 3 3.5 9.72 3.5 18C3.5 26.28 10.22 33 18.5 33C26.78 33 33.5 26.28 33.5 18C33.5 9.72 26.78 3 18.5 3ZM24.545 18.795L20.045 23.295C19.82 23.52 19.535 23.625 19.25 23.625C18.965 23.625 18.68 23.52 18.455 23.295C18.02 22.86 18.02 22.14 18.455 21.705L21.035 19.125H13.25C12.635 19.125 12.125 18.615 12.125 18C12.125 17.385 12.635 16.875 13.25 16.875H21.035L18.455 14.295C18.02 13.86 18.02 13.14 18.455 12.705C18.89 12.27 19.61 12.27 20.045 12.705L24.545 17.205C24.98 17.64 24.98 18.36 24.545 18.795Z" fill="#555555" />
                        </svg>
                    </button>

                    <div className={`${s.burger} ${isActive ? s.active : ''}`} onClick={toggleMenu}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7H21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M3 12H21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M3 17H21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header
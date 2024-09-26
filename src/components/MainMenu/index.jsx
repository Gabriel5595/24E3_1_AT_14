import React from 'react';
import styles from './mainMenu.module.css';

export default function MainMenu({ options }){
    return (
        <nav className={styles.nav}>
            <input type="checkbox" id="toggle-menu" className={styles.toggleMenu} />
            <label htmlFor="toggle-menu" className={styles.hamburger}>
                &#9776;
            </label>
            <ul className={styles.menu}>
                {options.map((option, index) => (
                    <li key={index} className={styles.menuItem}>
                        <a href={option.link}>{option.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

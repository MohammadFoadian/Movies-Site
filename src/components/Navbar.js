import React from 'react';
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div>
            
                <h2 className={styles.header}>Welcome to our website</h2>
            
            <p className={styles.text}>
                You can search for more than 5000 Moives
            </p>
        </div>
    );
};

export default Navbar;
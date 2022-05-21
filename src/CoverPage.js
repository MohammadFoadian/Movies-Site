import React from 'react';
import coverImg from "../src/assets/cover2.jpg"
import styles from "./CoverPage.module.css"
import { Link } from 'react-router-dom';


const CoverPage = () => {
    return (
        <div>
            <div>
                <Link to='/Home' className={styles.enter}>Enter To Website</Link>
            </div>
                <img src={coverImg} alt='cover' className={styles.Image} />
            
        </div>
    );
};

export default CoverPage;
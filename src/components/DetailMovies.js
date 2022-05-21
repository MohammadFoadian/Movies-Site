import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./DetailMovie.module.css"


const DetailMovies = () => {

    const clickHandler = () => { 
        alert("THE DOWNLOAD LINK IS NOT ENABLE NOW !")
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Download Here </h3>
            <div className={styles.box}>
                <ul>
                    <div className={styles.resulotion}>
                        <li>Resulotion <span className={styles.value}>Size</span> </li>
                    </div>
                    <div className={styles.lowest}>
                        <li>
                            <p>240 p</p>
                             <span className={styles.value}>400 MB</span> 
                             <button onClick={clickHandler}>Download</button>
                        </li>
                    </div>
                    <div className={styles.low}>
                        <li>
                            <p>480 p</p> 
                            <span className={styles.value}>800 MB</span>
                             <button onClick={clickHandler}>Download</button>
                        </li>
                    </div>
                    <div className={styles.high}>
                        <li>
                            <p>720 p</p>
                             <span className={styles.value}>1100 MB</span>
                              <button onClick={clickHandler}>Download</button>
                        </li>
                    </div>
                    <div className={styles.highest}>
                        <li>
                            <p>1080 p</p>
                             <span className={styles.value}>1400 MB</span>
                              <button onClick={clickHandler}>Download</button>
                        </li>
                    </div>
                </ul>
            <div>
                <Link to='/Home' className={styles.back}>Back To Home Page</Link>
            </div>
            </div>
        </div>
    );
};

export default DetailMovies;
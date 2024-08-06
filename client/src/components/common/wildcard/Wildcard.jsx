import React from 'react';
import { Link } from 'react-router-dom';

import styles from "../wildcard/Wildcard.module.css";

export default function Wildcard() {
    return (
        <div className={styles.wildcardWrapper}>
            <div className={styles.wildcard}>
                <h1>Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <div className={styles.buttons}>
                    <Link to="/"><button>Go to Home</button></Link>
                </div>
            </div>
        </div >
    );
};

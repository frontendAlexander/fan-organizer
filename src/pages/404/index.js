import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './404.css';

const NotFound = () => (
    <div className={styles.notFound}>
        <React.Fragment>
            <NavLink to='/'>
                <button className={styles.btn}>Вернуться на стартовую страницу</button>
            </NavLink>
        </React.Fragment>
    </div>
);

export default NotFound;

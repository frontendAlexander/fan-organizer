import React from 'react';
import AdminNav from '../../components/admin/adminNav';
import styles from './AdminLayout.css';

const AdminLayout = (props) => (
    <div className={styles.container}>
	    <div className={styles.left}>
	        <AdminNav/>
	    </div>
	    <div className={styles.right}>
	        {props.children}
	    </div>
    </div>
);

export default AdminLayout;
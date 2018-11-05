import React from 'react';
import AdminNav from '../../components/admin/AdminNav';
import styles from './AdminLayout.css';

const AdminLayout = (props) => (
    <div className={styles.container}>
	    <div className={styles.left}>
	        <AdminNav/>
	    </div>
	    <div className={styles.right}>
	        {props.chidlren}
	    </div>
    </div>
);

export default AdminLayout;
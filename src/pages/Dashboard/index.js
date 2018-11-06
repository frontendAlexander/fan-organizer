import React from 'react';
import AdminLayout from '../../hoc/AdminLayout';

const Dashboard = (props) => (
    <AdminLayout>
        <div>
            
            	{props.children}
            
        </div>    
    </AdminLayout>
);

export default Dashboard;
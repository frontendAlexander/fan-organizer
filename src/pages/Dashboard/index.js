import React from 'react';
import AdminLayout from '../../hoc/AdminLayout';
import AdminMatches from '../../pages/AdminMatches';
import TheTeam from '../../pages/TheTeam';

const Dashboard = (props) => (
    <AdminLayout>
        <div>
            
            	{props.children}
            
        </div>    
    </AdminLayout>
);

export default Dashboard;
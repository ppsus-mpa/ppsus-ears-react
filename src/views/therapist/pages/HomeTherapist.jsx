import React from 'react';
import BaseDashboard from '../../../components/bases/BaseDashboard';
import { useAuth } from '../../../providers/auth/Auth';
import { useViewConfiguration } from '../../../providers/viewConfiguration/ViewConfiguration';

const HomeTherapist = () => {
    const auth = useAuth();
    const configuration = useViewConfiguration();

    return (
        <div>
            <BaseDashboard user={auth.user} getDashboard={configuration.service.getDashboard} getReport={configuration.service.getReport} />
        </div>
    );
};

export default HomeTherapist;

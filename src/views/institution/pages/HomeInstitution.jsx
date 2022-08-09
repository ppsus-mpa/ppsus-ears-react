import BaseDashboard from '../../../components/bases/BaseDashboard';
import React  from 'react';
import GenericTable from '../../../components/lists/GenericTable';
import { useAuth } from '../../../providers/auth/Auth';
import { useViewConfiguration } from '../../../providers/viewConfiguration/ViewConfiguration';

const HomeInstitution = () => {
    const auth = useAuth();
    const configuration = useViewConfiguration();

    return (
        <React.Fragment>
            <BaseDashboard user={auth.user} getDashboard={configuration.service.getDashboard} getReport={configuration.service.getReport} />
            <GenericTable/>
        </React.Fragment>
    );
};

export default HomeInstitution;

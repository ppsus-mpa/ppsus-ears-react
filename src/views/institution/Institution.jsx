import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import { Route, Routes } from 'react-router-dom';
import BaseLoginPaper from '../../components/bases/BaseLoginPaper';
import HomeInstitution from './pages/HomeInstitution';
import InstitutionService from '../../services/institution/InstitutionService';
import PageNotFound from '../site/pages/PageNotFound';
import React from 'react';
import RegisterInstitution from './pages/login/RegisterInstitution';
import RegisterReferralService from './pages/referralService/RegisterReferralService';
import TopBar from '../../components/TopBar';
import UserAvatarDropDown from '../../components/genericUser/UserAvatarDropDown';
import { ViewConfigurationProvider } from '../../providers/viewConfiguration/ViewConfiguration';

const Institution = () => {
    return (
        <ViewConfigurationProvider service={InstitutionService} title={'Área Institucional'} baseRoute={'/institucional'} loginRoute={'/login'}>
            <AuthProvider>
                <TopBar rightElement={<UserAvatarDropDown withNotification={true}/>}>
                    <Routes>
                        <Route path={'/'} element={/*<RequireAuth>*/ <HomeInstitution/> /*</RequireAuth>*/} />
                        <Route path={'/login'} element={<RedirectIfAuth> <BaseLoginPaper/> </RedirectIfAuth>} />
                        <Route path={'/cadastro'} element={/*<RedirectIfAuth>*/ <RegisterInstitution/> /*</RedirectIfAuth>*/} />
                        <Route path={'/servico-referencia/cadastro'} element={/*<RequireAuth>*/ <RegisterReferralService/> /*</RequireAuth>*/} />
                        <Route path={'*'} element={<PageNotFound/>} />
                    </Routes>
                </TopBar>
            </AuthProvider>
        </ViewConfigurationProvider>
    );
};

export default Institution;

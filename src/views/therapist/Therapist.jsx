import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BaseLoginPaper from '../../components/bases/login/BaseLoginPaper';
import UserAvatarDropDown from '../../components/dropDown/UserDropDown';
import TopBar from '../../components/TopBar';
import { AuthProvider, RedirectIfAuth, RequireAuth } from '../../providers/auth/Auth';
import { ViewConfigurationProvider } from '../../providers/viewConfiguration/ViewConfiguration';
import TherapistService from '../../services/therapist/TherapistService';
import PageNotFound from '../site/pages/PageNotFound';
import MetaLinkMenu from './MetaLinkMenu';
import ListConduct from './pages/conduct/ListConduct';
import RegisterConduct from './pages/conduct/RegisterConduct';
import EditTherapist from './pages/edit/EditTherapist';
import ListEquipment from './pages/equipment/ListEquipment';
import ListEquipmentDemo from './pages/equipment/ListEquipmentDemo';
import RegisterEquipment from './pages/equipment/RegisterEquipment';
import HomeTherapist from './pages/HomeTherapist';
import ListIndicator from './pages/indicator/ListIndicator';
import RegisterIndicator from './pages/indicator/RegisterIndicator';
import ListOrientation from './pages/orientation/ListOrientation';
import RegisterOrientation from './pages/orientation/RegisterOrientation';
import PasswordForgotten from './pages/register/PasswordForgotten';
import RegisterTherapist from './pages/register/RegisterTherapist';
import ListBaby from './pages/triage/components/ListBaby';
import ListTriage from './pages/triage/ListTriage';
import RegisterTriage from './pages/triage/RegisterTriage';

const Therapist = () => {

    return (
        <ViewConfigurationProvider service={TherapistService} title={'Área do Fonoaudiólogo'} baseRoute={'/fono'} loginRoute={'/login'}>
            <AuthProvider>
                <TopBar rightElement={<UserAvatarDropDown withNotification={true} />} linkMenu={MetaLinkMenu}>
                    <Routes>
                        <Route path={'/'} element={<RequireAuth> <HomeTherapist /> </RequireAuth>} />
                        <Route path={'/login'} element={<RedirectIfAuth> <BaseLoginPaper registerRoute={'/cadastro'} /> </RedirectIfAuth>} />
                        <Route path={'/cadastro'} element={<RedirectIfAuth> <RegisterTherapist /> </RedirectIfAuth>} />
                        <Route path={'/minha-conta/:id'} element={<RequireAuth> <EditTherapist /> </RequireAuth>} />

                        <Route path={'/triagem'} element={<RequireAuth> <ListTriage /> </RequireAuth>} />
                        <Route path={'/triagem/cadastro'} element={<RequireAuth> <RegisterTriage /> </RequireAuth>} />
                        <Route path={'/bebe'} element={<RequireAuth> <ListBaby /> </RequireAuth>} />

                        <Route path={'/indicador'} element={<RequireAuth> <ListIndicator /> </RequireAuth>} />
                        <Route path={'/indicador/cadastro'} element={<RequireAuth> <RegisterIndicator /> </RequireAuth>} />

                        <Route path={'/equipamento'} element={<RequireAuth> <ListEquipment /> </RequireAuth>} />
                        <Route path={'/equipamento-demo'} element={<RequireAuth> <ListEquipmentDemo /> </RequireAuth>} />
                        <Route path={'/equipamento/cadastro'} element={<RequireAuth> <RegisterEquipment /> </RequireAuth>} />

                        <Route path={'/conduta'} element={<RequireAuth> <ListConduct /> </RequireAuth>} />
                        <Route path={'/conduta/cadastro'} element={<RequireAuth> <RegisterConduct /> </RequireAuth>} />

                        <Route path={'/orientacao'} element={<RequireAuth> <ListOrientation /> </RequireAuth>} />
                        <Route path={'/orientacao/cadastro'} element={<RequireAuth> <RegisterOrientation /> </RequireAuth>} />

                        <Route path={'/esqueci-minha-senha'} element={<RedirectIfAuth> <PasswordForgotten /> </RedirectIfAuth>} />
                        <Route path={'*'} element={<PageNotFound />} />
                    </Routes>
                </TopBar>
            </AuthProvider>
        </ViewConfigurationProvider>
    );
};

export default Therapist;

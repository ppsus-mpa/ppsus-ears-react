import React from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography, Link, Grid, Button} from "@mui/material";
import CrefonoIcon from "../../components/icons/CrefonoIcon";
import SecretaryIcon from "../../components/icons/SecretaryIcon";
import TopBar from "../../components/TopBar";
import Footer from "./components/Footer";
import VideoAndText from "./components/VideoAndText";
import TextParagraph from "./components/TextParagraph";
import VideoParagraph from "./components/VideoParagraph";
import UnivaliIcon from "../../components/icons/UnivaliIcon";
import UnieduIcon from "../../components/icons/UnieduIcon";
import NascerIcon from "../../components/icons/NascerIcon";
import CNPqIcon from "../../components/icons/CNPqIcon";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import TopicListIcon from "../../components/lists/TopicListIcon";

const Site = () => {
    let navigate = useNavigate();

    const partners = [
        {
            url: 'https://univali.br',
            element: <UnivaliIcon size={'140px'}/>
        },
        {
            url: 'https://saude.sc.gov.br/',
            element: <SecretaryIcon size={'200px'}/>
        },
        {
            url: 'https://cnpq.br',
            element: <CNPqIcon size={'220px'}/>
        },
        {
            url: 'http://www.uniedu.sed.sc.gov.br/',
            element: <UnieduIcon size={'130px'}/>
        },
        {
            url: 'https://crefono3.org.br/',
            element: <CrefonoIcon size={'290px'}/>
        },
        {
            url: 'https://fapesc.sc.gov.br/programa-nascer/',
            element: <NascerIcon size={'320px'}/>
        },
    ];

    return (
        <TopBar rightElement={
                <Button color="secondary"
                        type="submit"
                        variant="contained"
                        onClick={() => navigate('/pais')}
                >
                    Área dos pais
                </Button>
            }
        >
            <TextParagraph title={'Bem-Vindo à Meu primeiro alô'}>
                Um plataforma de ratreamento do teste da orelhinha,
                que foi desenvolvida pelo programa de pesquisa para o sus, edital fapesc 16/2020.
                O desenvolvimento foi realizado por alunos e professores  dos cursos de  ciência  da computação e
                fonoaudiologia da UNIVALI em parceria com a Secretaria de Estado da Saúde e apoio do Conselho Regional
                de Fonoaudiologia  3ª Região.
            </TextParagraph>
            <VideoParagraph title={'Bem-vindo'} url={'https://www.youtube.com/embed/'} />

            <TextParagraph title={'O que é?'}>
                <div style={{textAlign: 'left'}}>
                    <Typography variant={'h6'} color={'secondary'}>Objetivos</Typography>
                    <Typography variant={'body1'}>
                        Nosso objetivo é <Typography variant={'subtitle1'} component={'b'} color={'secondary'}>rastrear </Typography>
                        os bebês que realizaram o teste da orelhinha,
                        para <Typography variant={'subtitle1'} component={'b'} color={'secondary'}>identificar </Typography>
                        aqueles com teste alterado. A fim de <Typography variant={'subtitle1'} component={'b'} color={'secondary'}>acompanharmos </Typography>
                        as crianças com suspeita de deficiência auditiva.
                    </Typography>
                    <br/>
                    <Typography variant={'h6'} color={'secondary'}>Para quem é?</Typography>
                    <TopicListIcon icon={<FavoriteTwoToneIcon color='secondary'/>} topics={[
                            'Todos os fonoaudiólogos poderão acessar e incluir informações do teste da orelhinha;',
                            'A maternidade registrará os dados do recém-nascido;',
                            'O Estado de Santa Catarina terá o registro dos bebês;',
                            'Os pais acessarão  informações, resultados e encaminhamentos.',
                        ]}
                    />
                    <br/>
                    <Typography variant={'h6'} color={'secondary'}>Como participar</Typography>
                    <Typography variant={'body1'}>
                        Para acessar a plataforma, faça o seu cadastro e da instituição onde realiza o teste da orelhinha.
                    </Typography>
                    <br/>
                    <Typography variant={'h6'} color={'secondary'}>O que esperamos?</Typography>
                    <TopicListIcon icon={<FavoriteTwoToneIcon color='secondary'/>} topics={[
                        'Que seja uma ferramenta ágil e segura;',
                        'Que tenha informações atualizadas dos encaminhamentos;',
                        'Que gere relatórios de gestão dos dados.',
                    ]}
                    />
                </div>
            </TextParagraph>

            <VideoAndText title={'Dicas para os pais'} videoUrl={'https://www.youtube.com/embed/'}>
               <b>Olá,</b> mamães e papais
                <TopicListIcon icon={<FavoriteTwoToneIcon color='primary'/>} topics={[
                        'Antes de seu bebê sair da maternidade ele deverá realizar o teste da orelhinha.',
                        'Para a realização deste exame o fonoaudiólogo irá colocar uma borrachinha ligada a um aparelho na orelha do bebê.',
                        'O teste da orelhinha é realizado de forma rápida e indolor.',
                        'Com este teste é possível identificar como está a audição de seu filho.',
                        'Caso não seja obtido o resultado esperado, o fonoaudiólogo irá solicitar o reteste, dentro do primeiro mês de vida do recém- nascido.',
                        'O reteste é de extrema importância para sabermos como está a audição do seu bebê.',
                    ]}
                />
            </VideoAndText>

            <Box sx={{padding: '45px', textAlign: 'center'}}>
                <Typography variant="h4" color={'primary'} sx={{marginBottom: '30px'}}>Parceiros</Typography>
                <Grid container spacing={5} justifyContent={'center'} alignItems={'center'}>
                    {partners.map((partner) => (
                        <Grid item>
                            <Link href={partner.url} underline="hover" target={'_blank'} color={'white'}>
                                {partner.element}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer/>
        </TopBar>
    );
}

export default Site;
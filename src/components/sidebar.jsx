import React, { useContext } from 'react'
import Avatar from '../img/fotoPerfil.png'
import CurriculoPdf from '../img/curriculo.pdf'
import '../styles/components/sidebar.scss'
import SocialNetworks from './socialNetworks'
import InformationContainer from './informationContainer'
import { ThemeContext } from '../context/themeContext'


function Sidebar() {
    const {theme} = useContext(ThemeContext);

    return (
        <aside id="sidebar" className={theme}>
            <img className='gradient-bg' src={Avatar} alt="Ígara Yasmin" />
            <h1 className='gradient-bg'> Ígara Yasmin </h1>
            <p className='title card'>Desenvolvedora Frontend</p>
            <SocialNetworks />
            <InformationContainer />
            <a href={CurriculoPdf} className='btn' download="Currículo Ígara Yasmin.pdf">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar

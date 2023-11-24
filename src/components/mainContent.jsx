import React, { useContext } from 'react'

import AboutContainer from './aboutContainer';
import Projects from './projects';
import Technologies from './technologies';

import '../styles/components/maincontent.scss';
import { ThemeContext } from '../context/themeContext';

function MainContent() {
    const {theme} = useContext(ThemeContext);

    return (
        <main id="main-content" className={theme}>
            <AboutContainer />
            <Technologies />
            <Projects />
        </main>
        
    )
}

export default MainContent

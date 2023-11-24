import React, { useContext, useState } from 'react'

import { DiReact, DiHtml5, DiCss3, DiAngularSimple, DiSass, DiNodejsSmall, DiWordpress} from 'react-icons/di';
import { BiLogoMongodb, BiLogoVuejs } from 'react-icons/bi';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle  } from "react-icons/io";
import { ThemeContext } from '../context/themeContext';

import '../styles/components/technologies.scss';

const technologiesArray = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />},
    { id: 'css', name: 'CSS', icon: <DiCss3 />},
    { id: 'sass', name: 'Sass', icon: <DiSass />},
    { id: 'angular', name: 'Angular', icon: <DiAngularSimple />},
    { id: 'react', name: 'React', icon: <DiReact />},
    { id: 'vue', name: 'Vue.js', icon: <BiLogoVuejs />},
    { id: 'wordpress', name: 'Wordpress', icon: <DiWordpress />},
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall />},
    { id: 'mongo', name: 'MongoDB', icon: <BiLogoMongodb />},
    

]

function Technologies() {

    const {theme} = useContext(ThemeContext);
    const [ qnt, setQnt ] = useState(6);

    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
            {technologiesArray.slice(0, qnt).map((tech) => 
                (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        <svg width="0" height="0">
                            <linearGradient id="yellow-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor={theme === 'light' ? "rgb(230, 137, 30)" : "rgb(250, 197, 82)"} offset="0%" />
                                <stop stopColor={theme === 'light' ? "rgb(194, 22, 99)" : "rgba(221, 36, 118, 1)"} offset="100%" />
                            </linearGradient>
                        </svg>
                        {tech.icon}
                        <div className='tecnology-info'>
                            <h3>{tech.name}</h3>
                        </div>
                    </div>
                ))
                
        }
        </div>   
     
            <button className='show-more-btn' onClick={() => setQnt(qnt === 6 ? technologiesArray.length : 6)}>{qnt === 6 ? <span className='card'><IoIosArrowDropdownCircle/>Mostrar mais</span> : <span className='card'><IoIosArrowDropupCircle />Mostrar menos</span>}</button>
  
        </section>
    )
}

export default Technologies

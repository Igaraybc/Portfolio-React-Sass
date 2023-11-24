import React from 'react'

import '../styles/components/socialnetworks.scss'

import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn />, link:'https://www.linkedin.com/in/igara-yasmin'},
    {name: 'github', icon: <FaGithub />, link: 'https://github.com/Igaraybc'},
    {name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/igaraybc/'}
];

function SocialNetworks() {
    return (
        <section id="social-networks">
            {
                socialNetworks.map((network) => (
                    <a href={network.link} target='_blank' rel="noreferrer" className='social-btn card hover' id={network.name} key={network.name}>{network.icon}</a>
                ))
            }
        </section>
    )
}

export default SocialNetworks

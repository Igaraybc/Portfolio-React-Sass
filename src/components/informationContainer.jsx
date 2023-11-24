import React from 'react'

import '../styles/components/informationcontainer.scss';
import Information from './information';
import {AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';
import { RiComputerLine } from "react-icons/ri";

function InformationContainer() {

    return (
        <section id="information-container" className='card'>
            <Information icon={<AiOutlineMail id='email-icon' />} title='E-mail' info='igaraybc@gmail.com' />
            <Information icon={<RiComputerLine />} title='Site' info='igarayb.github.io' />
            <Information icon={<AiFillEnvironment id='pin-icon' />} title='Localização' info='Paraíba' />
        </section>
    )
}

export default InformationContainer

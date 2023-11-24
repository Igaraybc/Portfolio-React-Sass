import React from 'react'

function Information({icon, title, info}) {

    return (
        <div className="info-card">
            {icon}
            <div>
                <h3 className='text'>{title}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default Information

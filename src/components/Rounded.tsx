import React from 'react';

interface Props {
    label: string
}

export const Rounded: React.FC<Props> = ({ label }) => {
    return (
        <div className="service-number-wrapper">
            <div className='service-number'>
                {label}
            </div>
        </div>
    )
}

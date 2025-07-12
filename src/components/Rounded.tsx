import React from 'react';
import styles from '../styles/components/ServiceSection.module.css';

interface Props {
    label: string
}

export const Rounded: React.FC<Props> = ({ label }) => {
    return (
        <div className={styles.serviceNumberWrapper}>
            <div className={styles.serviceNumber}>
                {label}
            </div>
        </div>
    )
}

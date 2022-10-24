import React from 'react';
import styles from './layout.css'

interface ILayoutProps {
    children?: React.ReactNode;
}

// children - хороший способ рендерить одни компоненты в других компонентах
// не делая жесткой связи с помощью import
export function Layout({ children }:ILayoutProps) {
    return (
        <div className = {styles.layout}>
            {children}
        </div>
    );
}
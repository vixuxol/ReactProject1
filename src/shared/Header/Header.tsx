import React from 'react';
import styles from './header.css'
import { SearchBlock } from './SearchBlock/SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';

interface IHeaderProps {
    token: string
}
export function Header({ token }: IHeaderProps) {
    return (
        <header className = {styles.header}> 
            <SearchBlock token = {token}/>
            <ThreadTitle />
            <SortBlock />
        </header>
    );
}
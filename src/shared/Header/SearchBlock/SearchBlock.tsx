import React from 'react';
import { useUserData } from '../../../hooks/useUserData';
import styles from './searchblock.css'
import { UserBlock } from './UserBlock';


interface ISearchBlock {
    token: string;
}



export function SearchBlock({ token }: ISearchBlock) {
    
    const [data] = useUserData(token);
    return (
        <div className = {styles.searchBlock}> 
        <UserBlock avatarSrc={data.iconImg} username = {data.name} />
        </div>
        
    )
}
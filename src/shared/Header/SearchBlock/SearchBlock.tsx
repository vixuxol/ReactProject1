import axios from 'axios';
import React from 'react';
import styles from './searchblock.css'
import { UserBlock } from './UserBlock';


interface ISearchBlock {
    token: string;
}

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function SearchBlock({ token }: ISearchBlock) {
    const [data, setData] = React.useState<IUserData>({});

    React.useEffect(() => {
        // console.log(token);
        axios.get('https://oauth.reddit.com/api/v1/me?raw_json=1', {
            headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const userData = resp.data;
            console.log(userData)
            setData({ name: userData.name, iconImg: userData.icon_img });
           
        })
        .catch(console.log);
    }, [token])

    return (
        <div className = {styles.searchBlock}> 
        <UserBlock avatarSrc={data.iconImg} username = {data.name} />
        </div>
        
    )
}
import React from 'react';
import axios from 'axios';

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData(token: string) {
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
    }, [token]);

    return [data];

}
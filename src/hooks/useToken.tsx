import React from 'react';

export function useToken() {
    const [token, setToken] = React.useState('');
    React.useEffect(() => {
        const url = new URL(window.location.href);           
        const access_token = new URLSearchParams(url.hash).get('#access_token');
        if (access_token) {
            setToken(access_token); 
        }
    })

    return [token];
}


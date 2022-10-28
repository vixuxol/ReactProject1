import * as React from 'react';

export function pickFromSyntheticEvent<T extends HTMLElement>() {
    //то есть принимает ключ, который содержится в синтетик-ивенте, возвращает функцию, которая примет наш колл-бэк
    // в данном случае - onChange -> в конце-концов это все вернет функцию, которая примет наш ивент
    // и в результате она сделает коллбэк: e.currentTarget[key]
    return <K extends keyof T>(key: K) =>
        //тут в качестве параметра - функция onChange (а ключ - это либо cheked, либо value) 
        <E extends ((t: T[K]) => void)>(fn: E) => (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key]);
}

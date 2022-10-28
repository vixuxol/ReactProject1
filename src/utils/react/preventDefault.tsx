import * as React from 'react';

// две функции нужны для того, чтобы можно было применить композиции
export function preventDefault<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.preventDefault();
        fn(e);
    };
}

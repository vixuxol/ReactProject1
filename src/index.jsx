import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

window.addEventListener('load', () => {
    // второй элемент - это html элеменчик, куда наше все будет монтироваться
    ReactDOM.render(<App></App>, document.getElementById('react_root'));
});
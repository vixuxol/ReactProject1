import * as React from 'react';
import * as ReactDOM from 'react-dom';

window.addEventListener('load', () => {
    // второй элемент - это html элеменчик, куда наше все будет монтироваться
    ReactDOM.render(<Header />, document.getElementById('react_root'));
});
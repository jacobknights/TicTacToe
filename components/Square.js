import React from 'react';

//Make each square a clickable button

//Remember to destructure the props!
const Square = ({ value, onClick }) => (
    <button className="square" onClick={onClick}>
        {value}
    </button>
);

export default Square;
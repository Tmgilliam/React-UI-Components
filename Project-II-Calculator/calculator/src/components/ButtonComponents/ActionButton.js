import React from 'react';


const ActionButton = (props) => {
    return (
        <div className={props.buttonStyle}>{props.text}</div>
    )
}

export default ActionButton;
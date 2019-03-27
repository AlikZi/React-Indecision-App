import React from 'react';

const Option = (props) =>(
        <li className='option'><p className='option__text'>{props.count}. {props.optionText}</p><button onClick={(e) => {props.handleRemoveItem(props.optionText)}} className='btn--text'>Remove</button></li>
);


export default Option;

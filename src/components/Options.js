import React from 'react';
import Option from './Option';

const Options = (props) =>(
        <div>
            <div className='widget-header'>
            <h3>Your Options</h3>
            <button disabled={!props.hasOptions} onClick={props.handleDeleteOptions} className='btn--text'>Remove All</button>
            </div>
            {!props.hasOptions && <p className='widget-message'>Please add options to get started</p>}
            <ol>
            {
                props.options.map((option, index) => <Option key={option} count={index + 1} optionText={option} handleRemoveItem={props.handleRemoveItem}/>)
            }
            </ol>
        </div>
);


export default Options;
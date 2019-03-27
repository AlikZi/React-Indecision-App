import React from 'react';

const Action = (props) => (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick} className='btn-lg'>What should I do?</button>   
        </div>
);



export default Action;
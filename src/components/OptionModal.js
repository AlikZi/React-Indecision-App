import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
        ariaHideApp={false}
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleModalClose}
        contentLabel={props.selectedOption}
        closeTimeoutMS={200}
        className='modal'>
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
        <button className='btn' onClick={props.handleModalClose}>Okay</button>
        </Modal>
);


export default OptionModal;
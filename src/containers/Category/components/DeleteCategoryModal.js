import React from 'react';
import Modal from '../../../components/UI/Modal';

const DeleteCategoryModal = (props) => {

    const {
        modalTitle,
        show,
        handleClose,
        buttons,
        expandedArray,
        checkedArray
    } = props;

    return (
        <Modal
            modalTitle={modalTitle}
            show={show}
            handleClose={handleClose}
            buttons={buttons}
        >
            <h5>Expanded</h5>
            { expandedArray.map((item, index) => <span key={index}>{item.name}</span>) }
            <h5>Checked</h5>
            { checkedArray.map((item, index) => <span key={index}>{item.name}</span>) }

        </Modal>
    );
}

export default DeleteCategoryModal;
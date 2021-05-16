
import React, {useEffect} from "react";
import styled from 'styled-components';
import Container from './Container';

const Modal = (props) => {
    return (
        <div className={props.className}>
            <div className="modal">
                <div className="modal-header"></div>
                <div className="modal-body"></div>
            </div>
            <div className="modal-underlay"></div>
        </div>
    )
}

export default Modal;
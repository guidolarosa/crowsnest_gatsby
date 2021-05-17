
import React, {useEffect} from "react";
import styled from 'styled-components';
import Vimeo from '@u-wave/react-vimeo';
import {AiOutlineClose} from 'react-icons/ai';

const Modal = (props) => {
    const {show, onClose, className, content} = props;

    const title = content?.primary.product_title[0].text;
    const year = content?.primary.product_year[0].text ? content.primary.product_year[0].text : null;
    const vimeoID = content?.primary.product_vimeo_id[0].text;

    return (
        <StyledModal className={className} show={show}>
            <div className="modal">
                <div className="modal-header">
                    <h3>
                        {title}
                        {year && <span>{year}</span>}
                    </h3>
                    <AiOutlineClose onClick={() => {onClose()}}/>
                </div>
                <div className="modal-body">
                    {vimeoID && (
                        <Vimeo video={vimeoID} responsive />
                    )}
                </div>
            </div>
            <div className="modal-underlay" onClick={() => {onClose()}}></div>
        </StyledModal>
    )
};

const StyledModal = styled.div`
    display: ${(props) => (props.show ? 'block' : 'none')};
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
    top: 0;
    left: 0;
    z-index: 1;
    .modal {
        width: 960px;
        min-height: 680px;
        background: black;
        margin: 118px auto 0;
        .modal-header {
            padding: 18px;
            position: relative;
            display: flex;
            justify-content: space-between;
            h3 {
                margin: 0;
                font-weight: 400;
            }
            svg {
                fill: white;
                font-size: 28px;
            }
        }
        .modal-body {
            width: 100%;
        }
    }
`;

export default Modal;
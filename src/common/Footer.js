import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import {AiOutlineMail, AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai';
import { breakpoints, boxShadow } from './../utils/theme';

const Footer = (props) => {
    return (
        <StyledFooter size="full">
            <Container className={'footer-content'} size="medium" flex>
                <div className="address-container">
                    <address>
                        <span>Arévalo</span>
                        <span className="divider">/</span>
                        <span>C1414CQK - Palermo</span>
                        <span className="divider">/</span>
                        <span>CABA - Argentina</span>
                    </address>
                </div>
                <div className="social-links-container">
                    <AiOutlineMail title={'Mail'}/>
                    <AiOutlineInstagram title={'Instagram'}/>
                    <AiFillFacebook title={'Facebook'}/>
                </div>
            </Container>
        </StyledFooter>
    )
};

const StyledFooter = styled(Container)`
    background: ${(props) => (props.theme.black)};
    box-shadow: ${boxShadow.l};
    .footer-content {
        justify-content: space-between;
        align-items: center;
        .address-container {
            address {
                margin: 18px 0;
                font-style: normal;
                font-size: 14px;
                .divider {
                    margin: 0 8px;
                    color: ${(props) => (props.theme.accent)};
                }
            }
        }
        .social-links-container {
            svg {
                cursor: pointer;
                margin-left: 12px;
                font-size: 24px;
                opacity: .7;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
    @media screen and (max-width: ${breakpoints.md + 'px'}) {
        .footer-content {
            .address-container {
                address {
                    font-size: 12px;
                    display: flex;
                    .divider {
                        display: none;
                    }
                }
            }
        }
    }
`;

export default Footer;
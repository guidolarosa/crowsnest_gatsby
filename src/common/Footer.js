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
    background: ${(props) => (props.theme.grey600)};
    box-shadow: ${boxShadow.l};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='425' height='51' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%236a5acd' stroke-width='4.3' stroke-opacity='0.27'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
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
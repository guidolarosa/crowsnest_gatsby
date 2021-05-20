import * as React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import {breakpoints} from './../utils/theme';

const Logo = (props) => {
    return (
        <StyledLogo className="company-logo">
            <div className="isotype">
                <img src={logo} alt="Logo" />
            </div>
            <div className="logo-labels">
                <div className="company-name">Crows Nest</div>
                <div className="sub-label">Professional Color Grading</div>
            </div>
        </StyledLogo>
    )
};

const StyledLogo = styled.section`
    display: inline-block;
    display: flex;
    align-items: center;
    .isotype {
        margin-right: 16px;
        img {
            height: 43px;
        }
    }
    .logo-labels {
        display: flex;
        flex-direction: column;
        .company-name {
            font-weight: 600;
            font-size: 30px;
            margin-bottom: 4px;
            text-transform: uppercase;
        }
        .sub-label {
            color: ${(props) => (props.theme.accent)};
            font-size: 16px;
            line-height: 18px;
        }
        @media screen and (max-width: ${breakpoints.md + 'px'}) {
            .company-name {
                font-size: 28px;
                margin-bottom: 0;
            }
            .sub-label {
                font-size: 12px;
                line-height: 12px;
            }
        }
    }
`

export default Logo;



import React, {useEffect} from "react";
import styled from 'styled-components';
import {breakpoints} from './../utils/theme'

const Title = (props) => {
    return (
        <StyledTitleH1 className={props.className}>
            <h1>{props.content}</h1>
            <div className="decoration-container">
                <div className="gradient-line"></div>
            </div>
        </StyledTitleH1>
    )
}

const StyledTitleH1 = styled.div`
    display: block;
    width: 100%;
    display: flex;
    margin-bottom: 32px;
    @media screen and (max-width: ${breakpoints.md + 'px'}) {
        h1 {
            font-size: 38px;
        }
        .decoration-container {
            &:before {
                display: none;
            }
        }
    }
    h1 {
      font-size: 42px;
      margin: 0;
      /* max-width: 70%; */
      font-weight: 400;
    }
    .decoration-container {
        position: relative;
        flex-grow: 1;
        margin-left: 24px;
        .gradient-line {
            position: absolute;
            content: '';
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg,
                transparent,
                ${(props) => (props.theme.accent)},
                ${(props) => (props.theme.accent)},
                transparent
            );
        }
    }
`;

export default Title;
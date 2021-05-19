
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
    h1 {
      font-size: 42px;
      margin: 0;
      max-width: 70%;
      font-weight: 400;
      @media screen and (max-width: ${breakpoints.md + 'px'}) {
          font-size: 38px;
      }
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
            background: ${(props) => (props.theme.accent)};
        }
        &:before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: linear-gradient(90deg,
                ${(props) => (props.theme.background)},
                transparent,
                transparent,
                ${(props) => (props.theme.background)}
            )
        }
    }
`;

export default Title;
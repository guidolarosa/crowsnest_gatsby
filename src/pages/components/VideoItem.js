import * as React from "react";
import styled from 'styled-components';

const VideoItem = (props) => {
    const {content, onClick} = props;
    return (
        <StyledVideoItem 
            style={{backgroundImage: `url(${content?.primary.product_thumbnail.url})`}} 
            className="slider-item"
            onClick={() => {onClick(content)}}
        >
            <div className="product-overlay">
                <h3>{content?.primary.product_title[0]?.text}</h3>
                <p>{content?.primary.product_year[0]?.text}</p>
            </div>
        </StyledVideoItem>
    )
};

const StyledVideoItem = styled.div`
    min-width: calc(25% - 8px);
    background: black;
    margin: 0 10px 0 0;
    border-radius: 10px;
    height: 140px;
    background-size: 150%;
    background-position: center;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.7);
    position: relative;
    cursor: pointer;
    overflow: hidden;
    &:hover {
        .product-overlay {
            opacity: 1;
            h3,p {
                opacity: 1;
                filter: blur(0);
            }
        }
    }
    .product-overlay {
        padding: 16px;
        opacity: 0;
        pointer-events: none;
        background: rgba(0,0,0,.5);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: ease-in-out 0.3s all;
        h3, p {
            position: relative;
            transition: ease-in-out 0.2s all;
            transition-delay: .2s;
            opacity: 0;
            filter: blur(10px)
        }
        h3 {
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            margin: 0;
        }
        p {
            margin: 0;
            font-size: 14px;
            font-weight: 400;
            opacity: 0.5;
        }
    }
`;

export default VideoItem;
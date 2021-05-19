import * as React from "react";
import styled from 'styled-components';

const VideoItem = (props) => {
    const {content, onClick} = props;

    const title = content?.primary.product_title[0]?.text;
    const year = content?.primary.product_year[0]?.text;

    return (
        <StyledVideoItem 
            title={title}
            style={{backgroundImage: `url(${content?.primary.product_thumbnail.url})`}} 
            className="slider-item"
            onClick={() => {onClick(content)}}
        >
            <div className="product-overlay">
                <span className={'year-badge'}>{year}</span>
                <h3>{title}</h3>
            </div>
        </StyledVideoItem>
    )
};

const StyledVideoItem = styled.div`
    background: black;
    border-radius: 2px;
    height: 100%;
    background-size: 120%;
    background-position: center;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.7);
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: ease-in-out .2s all;
    border: 0px solid ${(props) => (props.theme.accent)};
    &:hover {
        .product-overlay {
            background: linear-gradient(0deg, ${(props) => (props.theme.accent)}, transparent 50%);
            opacity: 1;
            h3, .year-badge {
                opacity: 1;
                filter: blur(0);
            }
        }
    }
    .product-overlay {
        padding: 8px;
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: -3px;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        transition: ease-in-out 0.3s all;
        background: linear-gradient(0deg, rgba(0,0,0,.8), transparent 50%);
        h3, .year-badge {
            position: relative;
            transition: ease-in-out 0.2s all;
            transition-delay: .2s;
        }
        h3 {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            margin: 0;
            margin-top: auto;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            width: 80%;
        }
        .year-badge {
            margin: 0;
            font-size: 12px;
            font-weight: 400;
            display: inline-block;
            color: white;
            background: ${(props) => (props.theme.accent)};
            border-radius: 30px;
            padding: 0 10px;
            line-height: 16px;
            margin-left: auto;
        }
    }
`;

export default VideoItem;
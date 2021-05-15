import * as React from "react";
import styled from 'styled-components';
import Container from '../../common/Container';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const VideoSlider = (props) => {
    const { title, content, contentColor } = props;
    const pages = [];

    let i, j, temparray, chunk = 8;
    for (i = 0, j = content.length; i < j; i += chunk) {
        temparray = content.slice(i, i + chunk);
        pages.push(temparray);
    };

    console.log(pages);

    return (
        <StyledVideoSlider size="medium">
            <div className="video-slider-title">
                <h2>{title}</h2>
            </div>
            <div className="slider-controls">
                <div className="slider-button left">
                    <IoIosArrowDropleftCircle/>
                </div>
                <div className="slider-button right">
                    <IoIosArrowDroprightCircle/>
                </div>
            </div>
            <div className="slider-container">
                {pages.map((productPage) => (
                    <div className="slider-page">
                        {productPage.map((item) => {
                            return (
                                <div 
                                    style={{backgroundImage: `url(${item.primary.product_thumbnail.url})`}} 
                                    className="slider-item"
                                >
                                    <div className="product-overlay">
                                        <h3>{item.primary.product_title[0].text}</h3>
                                        <p>{item.primary.product_year[0]?.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </StyledVideoSlider>
    )
};

const StyledVideoSlider = styled(Container)`
    margin-bottom: 48px;
    position: relative;
    .video-slider-title {
        background: ${(props) => (props.theme.lightBlack)};
        display: inline-block;
        border-radius: 100px;
        padding: 2px 16px;
        margin-bottom: 16px;
        height: 31px;
        display: inline-flex;
        align-items: center;
        h2 {
            margin: 0;
            font-size: 18px;
            font-weight: 200;
        }
    }
    .slider-controls {
        position: absolute;
        top: 45px;
        height: calc(100% - 45px);
        width: 100%;
        .slider-button {
            position: absolute;
            top: calc(50% - 24px);
            font-size: 48px;
            filter: drop-shadow(0 0 1px black);
            transition: ease-in-out 0.2s all;
            cursor: pointer;
            &:hover {
                filter: drop-shadow(0 0 8px black);
            }
            svg {
                fill: ${(props) => (props.theme.accent)};
            }
            &.left {
                left: -60px;
            }
            &.right {
                right: -60px;
            }
        }
    }
    .slider-container {
        overflow: hidden;
        display: flex;
        .slider-page {
            display: flex;
            flex-wrap: nowrap;
            min-width: 100%;
            .slider-item {
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
            }
        }
    }
`;

export default VideoSlider;
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Container from '../../common/Container';
import Modal from '../../common/Modal';
import VideoItem from './VideoItem';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const VideoSlider = (props) => {
    const { title, content, contentColor } = props;
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pages = [];

    let i, j, temparray, chunk = 8;
    for (i = 0, j = content?.length; i < j; i += chunk) {
        temparray = content.slice(i, i + chunk);
        pages.push(temparray);
    };

    // console.log(pages);

    const handleItemSelect = (item) => {
        console.log(item);
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        console.log(selectedItem);
    }, [selectedItem])

    return (
        <StyledVideoSlider size="medium" contentColor={contentColor}>
            <div className="video-slider-title">
                <div className="circle-decoration"></div>
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
                                <VideoItem 
                                    content={item} 
                                    onClick={handleItemSelect}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
            <Modal 
                content={selectedItem}
                className="video-content-modal"
                show={isModalOpen}
                onClose={handleModalClose}
            />
        </StyledVideoSlider>
    )
};

const StyledVideoSlider = styled(Container)`
    margin-bottom: 48px;
    position: relative;
    .video-slider-title {
        background: ${(props) => (props.theme.grey300)};
        display: inline-block;
        border-radius: 100px;
        padding: 0 8px;
        margin-bottom: 16px;
        height: 31px;
        display: inline-flex;
        align-items: center;
        h2 {
            margin: 0;
            font-size: 18px;
            font-weight: 200;
        }
        .circle-decoration {
            width: 12px;
            height: 12px;
            border-radius: 50px;
            background: ${(props) => (props.contentColor)};
            margin-right: 6px;
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
                fill: ${(props) => (props.theme.grey300)};
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
        }
    }
`;

export default VideoSlider;
import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';
import Container from '../../common/Container';
import Modal from '../../common/Modal';
import VideoItem from './VideoItem';
import $ from 'jquery';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { breakpoints } from './../../utils/theme';

const VideoSlider = (props) => {
    const { title, content, contentColor } = props;

    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pageWidth, setPageWidth] = useState(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const [pages, setPages] = useState(null);
    const [pageSize, setPageSize] = useState(4);
    const [sliderTotalPages, setSliderTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const sliderContainerRef = useRef(null);
    const pageRef = useRef(null);

    useEffect(() => {
        if (content) {
            let i, j, temparray, chunk = pageSize, pages = [];
            for (i = 0, j = content?.length; i < j; i += chunk) {
                temparray = content.slice(i, i + chunk);
                pages.push(temparray);
            };
            setPages(pages);
        }
    }, [content, pageSize]);

    useEffect(() => {
        if (pages) {
            setSliderTotalPages(pages.length);
        }
    }, [pages]);

    useEffect(() => {
        console.log(currentPage);
    }, [currentPage])

    const handleItemSelect = (item) => {
        // console.log(item);
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (pageRef.current) {
            const pageWidth = pageRef.current.getBoundingClientRect().width;
            setPageWidth(pageWidth);
        }
    }, [pageRef.current, windowWidth]);

    const handleArrowLeft = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const handleArrowRight = () => {
        if (currentPage < sliderTotalPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    useEffect(() => {
        $(sliderContainerRef.current).stop().animate({
            scrollLeft: pageWidth * (currentPage - 1)
        });
    }, [currentPage]);

    const handleWindowWidth = (width) => {
        console.log(width, breakpoints.md)
        if (width < breakpoints.md && width > breakpoints.s) {
            setPageSize(3);
            console.log('tablet')
        } else if (width <= breakpoints.s && width > breakpoints.xs)  {
            setPageSize(2);
            console.log('phone-l')
        } else if (width <= breakpoints.xs) {
            setPageSize(1);
            console.log('phone')
        } else {
            setPageSize(4);
            console.log('default')
        }
    }

    useEffect(() => {
        let width = window.innerWidth;
        setWindowWidth(width)
        window.addEventListener('resize', (e) => {
            let width = e.currentTarget.innerWidth;
            setWindowWidth(width);
        })
    }, []);

    useEffect(() => {
        handleWindowWidth(windowWidth)
    }, [windowWidth])

    return (
        <StyledVideoSlider size="medium" contentColor={contentColor} pageSize={pageSize} className={'video-slider'}>
            <div className="video-slider-title">
                <div className="circle-decoration"></div>
                <h2>{title}</h2>
            </div>
            <div className="slider-controls">
                <div 
                    className={`slider-button left ${currentPage == 1 ? 'disabled' : ''}`} 
                    onClick={handleArrowLeft}
                >
                    <IoIosArrowDropleftCircle/>
                </div>
                <div 
                    className={`slider-button right ${currentPage == sliderTotalPages ? 'disabled' : ''}`}
                    onClick={handleArrowRight}>
                    <IoIosArrowDroprightCircle/>
                </div>
            </div>
            <div className="slider-container" ref={sliderContainerRef}>
                {pages?.map((productPage) => (
                    <div className="slider-page" ref={pageRef}>
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
            <div className="slider-step-indicators">
                <span className="indicator-labels"><strong>{currentPage}</strong> / {sliderTotalPages}</span>
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
    @media screen and (max-width: ${breakpoints.s + 'px'}) {
        width: 80%;
    }
    .video-slider-title {
        background: ${(props) => (props.theme.grey400)};
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
            &.disabled {
                pointer-events: none;
                opacity: .5;
            }
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
        overflow-x: hidden;
        display: flex;
        .slider-page {
            display: grid;
            grid-template-columns: repeat(${(props) => (props.pageSize)}, 1fr);
            grid-template-rows: 148px;
            min-width: 100%;
            grid-column-gap: 4px;
            @media screen and (max-width: ${(props) => (`${breakpoints.s}px`)}) {
                grid-template-rows: 200px;
            }
        }
    }
    .slider-step-indicators {
        margin-top: 8px;
        font-size: 14px;
        opacity: .7;
        display: flex;
        justify-content: center;
        .indicator-labels {
            background: black;
            padding: 0 10px;
            border-radius: 20px;
        }
    }
`;

export default VideoSlider;
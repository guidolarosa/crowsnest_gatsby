import React, {useRef, useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import VideoSlider from './VideoSlider';
import Title from './../../common/Title';
import Container from './../../common/Container';
import theme from './../../utils/theme';

const SliderGallery = (props) => {
    const { slidersData } = props;

    const [scrollTop, setScrollTop] = useState(0);
    const [gradientPosition, setGradientPosition] = useState(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    const gradientRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
          let scrollTop = window.scrollY;
          setScrollTop(scrollTop);
        })
      }, []);
      
    useEffect(() => {
        if (gradientRef.current) {
            const {top} = gradientRef.current.getBoundingClientRect();
            setGradientPosition(top);
        }
    }, [gradientRef.current])

    useEffect(() => {
        if (scrollTop > gradientPosition) {
            if (!animationComplete) {
            let gradients = document.querySelectorAll('.gradient-container');
            gradients.forEach((e) => {
                e.classList.add('fade-in-animate');
            });
            setAnimationComplete(true);
            }
        }
    }, [scrollTop]);

    return (
        <StyledSliderGallery className={'slider-gallery'}>
            <div ref={gradientRef} className={'gradient-container'} />
            <div className={'gradient-container'} />
            <Container size={'medium'} className={'gallery-wrapper'}>
                <Title tag={'h1'} content={'Nuestros trabajos'} />
                {slidersData && (
                    slidersData.map((videoSlider) => (
                        <VideoSlider
                            title={videoSlider.title}
                            content={videoSlider.content}
                            contentColor={videoSlider.contentColor}
                        />
                    ))
                )}
            </Container>
        </StyledSliderGallery>
    )
};

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const StyledSliderGallery = styled.div`
    .slider-gallery {
        position: relative;
        .gradient-container {
            width: 50%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            background: radial-gradient(circle at left, ${(props) => (props.theme.blue500)} 0%, ${(props) => (props.theme.background)} 40%);
            &:nth-child(2) {
                right: 0;
                background: red;
                left: 50%;
                background: radial-gradient(circle at right, ${(props) => (props.theme.purple500)} 0%, ${(props) => (props.theme.background)} 40%);
            }
            &.fade-in-animate {
                animation: ${fadeIn} 2s forwards;
            }
        }
    }
`;

export default SliderGallery;
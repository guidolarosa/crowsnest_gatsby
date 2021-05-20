import * as React from "react";
import styled, {keyframes} from 'styled-components';
import Container from '../../common/Container';
import Button from '../../common/Button';
import backgroundImage from '../../images/hero_background.png';
import {breakpoints, boxShadow} from './../../utils/theme';

const Hero = () => {
    return (
        <StyledHero
            size={'full'} 
            className={'hero'} 
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <Container size={'medium'}>
              <Container 
                className="hero-card"
                padded 
                paddingSize={'large'}
                align={'left'} 
                width={'70%'}
              >
                <h1>Color Grading<br/><b>Profesional</b></h1>
                <p>Transformá la manera en la que se ven tus películas</p>
                <Button 
                    className={'hero-cta'} 
                    label={'Informate'} 
                    type={'link'} 
                    href="/services" 
                />
              </Container>
            </Container>
        </StyledHero>
    )
};

const fadeUp = keyframes`
    from {
        top: 100px;
        opacity: 0;
        filter: blur(10px)
    }
    to {
        top: 0;
        opacity: 1;
        filter: blur(0)
    }
`;

const StyledHero = styled(Container)`
    background: ${(props) => (props.theme.accent)};
    flex-grow: 1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    &:after {
        content: '';
        width: 100%;
        height: 30vh;
        position: absolute;
        background: linear-gradient(180deg, transparent, ${(props) => (props.theme.background)});
        bottom: 0;
    }
    .hero-card {
        background: rgba(0,0,0,.1);
        border: 1px solid rgba(255,255,255, .5);
        margin-top: 80px;
        border-radius: 10px;
        backdrop-filter: blur(10px);
        animation: 1s ${fadeUp} forwards .5s;
        opacity: 0;
        position: relative;
        box-shadow: ${boxShadow.md};
        h1 {
            font-size: 84px;
            font-weight: 200;
            margin: 0;
            b {
                font-weight: 400;
            }
        }
        p {
            font-size: 32px;
            font-weight: 300;
            opacity: .7;
            margin-top: 16px;
            padding-right: 20%;
            line-height: 40px;
        }
        .hero-cta {
            margin-top: 18px;
            width: 200px;
        }
    }
    @media screen and (max-width: ${breakpoints.s + 'px'}) {
        .hero-card {
            width: 100%;
            h1 {
                font-size: 54px;
            }
            p {
                font-size: 26px;
            }
            .hero-cta {
                a {
                    font-size: 28px;
                    padding: 16px;
                }
            }
        }
    }
`;

export default Hero;
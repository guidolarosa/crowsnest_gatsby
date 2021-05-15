import * as React from "react";
import styled, {keyframes} from 'styled-components';
import Container from '../../common/Container';
import Button from '../../common/Button';
import backgroundImage from '../../images/hero_background.png';

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
                width={'500px'}
              >
                <h1>Color Grading<br/><b>Profesional</b></h1>
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
        border-radius: 5px;
        backdrop-filter: blur(10px);
        animation: 1s ${fadeUp} forwards .5s;
        opacity: 0;
        position: relative;
        h1 {
            font-size: 64px;
            font-weight: 200;
            margin: 0;
            b {
                font-weight: 400;
            }
        }
        .hero-cta {
            margin-top: 18px;
            width: 200px;
        }
    }
`;

export default Hero;
import React, {useState, useEffect, useRef} from "react"
import styled, {ThemeProvider, keyframes} from 'styled-components';
import theme from './../utils/theme';
import { Helmet } from 'react-helmet';
import Header from '../common/Header';
import Hero from './components/Hero';
import "../styles/layout.css";
import "../styles/globals.scss";
import Container from './../common/Container';
import Footer from './../common/Footer';
import VideoSlider from './components/VideoSlider';
import Title from './../common/Title';
import { videoContentColors } from './../utils/UIConstants';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [gradientPosition, setGradientPosition] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  const allProducts = data.allPrismicColorGrading.nodes[0].dataRaw.body;

  const videoclips = allProducts.filter((product) => product.primary.product_type == 'videoclip');
  const comerciales = allProducts.filter((product) => product.primary.product_type == 'comercial');
  const series = allProducts.filter((product) => product.primary.product_type == 'serie');
  const largometrajes = allProducts.filter((product) => product.primary.product_type == 'largometraje');

  const gradientRef = useRef(null);

  const videoSliders = [
    {
      title: 'Largometrajes',
      content: largometrajes,
      contentColor: videoContentColors.largometrajes,
    },
    {
      title: 'Series',
      content: series,
      contentColor: videoContentColors.series,
    },
    {
      title: 'Videoclips',
      content: videoclips,
      contentColor: videoContentColors.videoclips,
    },
    {
      title: 'Comerciales',
      content: comerciales,
      contentColor: videoContentColors.comerciales,
    },
  ];

  
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
    <ThemeProvider theme={theme}>
      <StyledIndexPage>
          <Helmet>
            <title>Crows Nest - Professional Color Grading</title>
          </Helmet>
          <Header>
            <Hero />
          </Header>
          <main>
            <Container size="full">
              <div className={'slider-gallery'}>
                <div ref={gradientRef} className={'gradient-container'} />
                <div className={'gradient-container'} />
                <Container size={'medium'} className={'gallery-wrapper'}>
                  <Title tag={'h1'} content={'Nuestros trabajos'} />
                  {videoSliders.map((videoSlider) => (
                    <VideoSlider
                      title={videoSlider.title}
                      content={videoSlider.content}
                      contentColor={videoSlider.contentColor}
                    />
                  ))}
                </Container>
              </div>
            </Container>
          </main>
          <Footer/>
      </StyledIndexPage>
    </ThemeProvider>
  )
};

export default IndexPage;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledIndexPage = styled.section`
  background: ${(props) => (props.theme.background)};
  header {
    height: 100vh;
  }
  main {
    margin-top: 64px;
    padding-bottom: 100px;
    .gallery-wrapper {
      position: relative;
    }
    .slider-gallery {
      position: relative;
      .gradient-container {
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        background: radial-gradient(circle at left, ${(props) => (props.theme.gradient_blue)} 0%, ${(props) => (props.theme.background)} 40%);
        &:nth-child(2) {
          right: 0;
          background: red;
          left: 50%;
          background: radial-gradient(circle at right, ${(props) => (props.theme.gradient_purple)} 0%, ${(props) => (props.theme.background)} 40%);
        }
        &.fade-in-animate {
          animation: ${fadeIn} 2s forwards;
        }
      }
    }
  }
`;

export const query = graphql`
  query ColorGradingProducts {
    allPrismicColorGrading {
      nodes {
        dataRaw
      }
    }
  }
`;

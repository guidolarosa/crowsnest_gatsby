import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import theme from './../utils/theme';
import { Helmet } from 'react-helmet';
import Header from '../common/Header';
import Hero from './components/Hero';
import "../styles/layout.css";
import "../styles/globals.scss";
import Container from './../common/Container';
import VideoSlider from './components/VideoSlider';

import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const allProducts = data.allPrismicColorGrading.nodes[0].dataRaw.body;

  const videoclips = allProducts.filter((product) => product.primary.product_type == 'videoclip');
  const comerciales = allProducts.filter((product) => product.primary.product_type == 'comercial');
  const series = allProducts.filter((product) => product.primary.product_type == 'serie');
  const largometrajes = allProducts.filter((product) => product.primary.product_type == 'largometraje');

  const videoSliders = [
    {
      title: 'Largometrajes',
      content: largometrajes,
      contentColor: '#fff',
    },
    {
      title: 'Series',
      content: series,
      contentColor: '#fff',
    },
    {
      title: 'Videoclips',
      content: videoclips,
      contentColor: '#fff',
    },
    {
      title: 'Comerciales',
      content: comerciales,
      contentColor: '#fff',
    },
  ]

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
            <Container size="medium">
              <div className="title-container">
                <h1>Nuestros trabajos</h1>
              </div>
              {videoSliders.map((videoSlider) => (
                <VideoSlider
                  title={videoSlider.title}
                  content={videoSlider.content}
                  contentColor={videoSlider.contentColor}
                />
              ))}
            </Container>
          </main>
      </StyledIndexPage>
    </ThemeProvider>
  )
}


export default IndexPage;

const StyledIndexPage = styled.section`
  background: ${(props) => (props.theme.background)};
  header {
    height: 90vh;
  }
  main {
    margin-top: 64px;
    padding-bottom: 100px;
    h1 {
      font-size: 42px;
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

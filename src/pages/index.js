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
import Title from './../common/Title';
import {videoContentColors} from './../utils/UIConstants';

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
              <Title tag={'h1'} content={'Nuestros trabajos'} />
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

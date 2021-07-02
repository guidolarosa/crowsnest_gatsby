import React, {useState, useEffect, useRef} from "react"
import styled, {ThemeProvider, keyframes} from 'styled-components';
import theme from './../utils/theme';
import { Helmet } from 'react-helmet';
import Header from '../common/Header';
import Hero from './components/Hero';
import SliderGallery from './components/SliderGallery';
import "../styles/layout.css";
import "../styles/globals.scss";
import Container from './../common/Container';
import Footer from './../common/Footer';
import { videoContentColors } from './../utils/UIConstants';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {

  const allProducts = data.allPrismicColorGrading.nodes[0].dataRaw.body;

  const videoclips = allProducts.filter((product) => product.primary.product_type == 'videoclip');
  const comerciales = allProducts.filter((product) => product.primary.product_type == 'comercial');
  const series = allProducts.filter((product) => product.primary.product_type == 'serie');
  const largometrajes = allProducts.filter((product) => product.primary.product_type == 'largometraje');
  const cortometrajes = allProducts.filter((product) => product.primary.product_type == 'cortometraje');
  const reels = allProducts.filter((product) => product.primary.product_type == 'reels-cursos');
  const documentales = allProducts.filter((product) => product.primary.product_type == 'documentales');

  const videoSliders = [
    {
      title: 'Comerciales',
      content: comerciales,
      contentColor: videoContentColors.comerciales,
    },
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
      title: 'Cortometrajes',
      content: cortometrajes,
      contentColor: videoContentColors.videoclips,
    },
    {
      title: 'Reels - Cursos',
      content: reels,
      contentColor: videoContentColors.videoclips,
    },
    {
      title: 'Documentales',
      content: documentales,
      contentColor: videoContentColors.videoclips,
    },
  ];

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
              <SliderGallery slidersData={videoSliders} />
            </Container>
          </main>
          <Footer/>
      </StyledIndexPage>
    </ThemeProvider>
  )
};

export default IndexPage;

const StyledIndexPage = styled.section`
  background: ${(props) => (props.theme.background)};
  header {
    height: 90vh;
  }
  main {
    margin-top: 64px;
    padding-bottom: 100px;
    .gallery-wrapper {
      position: relative;
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

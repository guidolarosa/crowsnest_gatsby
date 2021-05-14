import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import theme from './../utils/theme';
import { Helmet } from 'react-helmet';
import Header from '../common/Header';
import Hero from './components/Hero';
// import Button from '../components/Button'
import "../styles/layout.css";
import "../styles/globals.scss";

import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const document = data;
  console.log(document);
  return (
    <ThemeProvider theme={theme}>
      <StyledIndexPage>
          <Helmet>
            <title>Crows Nest - Professional Color Grading</title>
          </Helmet>
          <Header>
            <Hero />
          </Header>
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
`;

export const query = graphql`
  query ColorGrading {
    allPrismicColorGradingBodyAnadirContenido {
      edges {
        node {
          primary {
            product_title {
              raw
            }
            product_thumbnail {
              url
            }
          }
        }
      }
    }
  }
`;

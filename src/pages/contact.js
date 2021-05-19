import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import {Helmet} from 'react-helmet';
import theme from './../utils/theme';
import Header from '../common/Header';
import Title from './../common/Title';
import Container from './../common/Container';
import Footer from './../common/Footer';
import GoogleMap from './../common/GoogleMap';
import { externalLinks } from "../utils/UIConstants";

const ContactPage = () => (
  <ThemeProvider theme={theme}>
    <StyledContactPage>
        <Helmet>
          <title>Crows Nest - Professional Color Grading | Contactanos</title>
        </Helmet>
        <Header/>
        <main>
          <Container size={'medium'} className={'contact-data'}>
            <Title content={'Queremos conocerte'} />
          </Container>
          <Container size={'medium'} className={'map-container'}>
            <GoogleMap darkMode src={externalLinks.googleMaps} className={'map-wrapper'} />
          </Container>
        </main>
        <Footer />
    </StyledContactPage>
  </ThemeProvider>
)

export default ContactPage;

const StyledContactPage = styled.section`
  background: ${(props) => (props.theme.background)};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    flex-grow: 1;
  }
  .contact-data {
    margin-top: 60px;
  }
  .map-container {
    .map-wrapper {
      /* box-shadow: 0 0 8px rgba(0,0,0, .8); */
      /* border-radius: 20px; */
    }
  }
`;

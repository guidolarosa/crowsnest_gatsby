import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import {Helmet} from 'react-helmet';
import theme from './../utils/theme';
import Header from '../common/Header';
import Title from './../common/Title';
import Container from './../common/Container';
import Footer from './../common/Footer';
import GoogleMap from './../common/GoogleMap';

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
            <GoogleMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.962291563366!2d-58.44118994876696!3d-34.57982068036978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb593430d0be9%3A0xfbcbd6475bcb8e2d!2sAr%C3%A9valo%201853%2C%20C1414%20CQK%2C%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1621438718843!5m2!1sen!2sar">
            </GoogleMap>
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
    iframe {
      border-radius: 20px;
      box-shadow: 0 0 8px rgba(0,0,0, .8);
    }
  }
`;

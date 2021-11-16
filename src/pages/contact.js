import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import {Helmet} from 'react-helmet';
import theme, {breakpoints} from './../utils/theme';
import Header from '../common/Header';
import Title from './../common/Title';
import Container from './../common/Container';
import Footer from './../common/Footer';
import GoogleMap from './../common/GoogleMap';
import {AiOutlineMail, AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai';
import { externalLinks } from "../utils/UIConstants";
import FrontImage from './../images/services/frente.jpg';
import CNLogo from './../images/Logo Crow Nest V 07.jpg';
import AACLogo from './../images/miembro.jpg';


const ContactPage = () => (
  <ThemeProvider theme={theme}>
    <StyledContactPage>
        <Helmet>
          <title>Crows Nest - Professional Color Grading | Contactanos</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        </Helmet>
        <Header/>
        <main>
          <Container size={'medium'} className={'contact-data'}>
            <Title content={'Queremos conocerte'} />
          </Container>
          <Container size={'medium'} className={'map-container'}>
            <GoogleMap darkMode src={externalLinks.googleMaps} className={'map-wrapper'} />
            <div className="front-image" />
          </Container>
          <Container size={'medium'} className={'links-container'}>
            <div className="links-column">
              <div className="address-container">
                <address>
                    <span>
                      <strong>Arévalo 1853</strong>
                    </span>
                    <span>C1414CQK - Palermo</span>
                    <span>CABA - Argentina</span>
                </address>
              </div>
            </div>
            <div className="links-column">
              <a href="mailto:crowsnestpcg@gmail.com" className="link-item">
                <AiOutlineMail title={'Mail'}/>
                <span>crowsnestpcg@gmail.com</span>
              </a>
              <a target="_blank" href="https://www.instagram.com/crowsnestcolor/" className="link-item">
                <AiOutlineInstagram title={'Instagram'}/>
                <span>@crowsnestcolor</span>
              </a>
              <a target="blank" href="https://www.facebook.com/crownestcolor" className="link-item">
                <AiFillFacebook title={'Facebook'}/>
                <span>Facebook</span>
              </a>
            </div>
          </Container>
          <div className="logo-container">
            <div className="logo" />
            <div className="logo" />
          </div>
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
    display: flex;
    flex-direction: row-reverse;
    .map-wrapper {
      /* box-shadow: 0 0 8px rgba(0,0,0, .8); */
      /* border-radius: 20px; */
    }
    .front-image {
      background-image: url(${FrontImage});
      width: 60%;
      height: 400px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
    }
  }
  .links-container {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    .links-column {
      width: 49%;
      .link-item {
        display: flex;
        align-items: center;
        text-decoration: none;
        svg {
          margin-right: 8px;
        }
      }
      .address-container {
        address {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
  .logo-container {
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: ${breakpoints.md + 'px'}) {
      flex-direction: column;
      align-items: center;
    }
    .logo {
      width: 300px;
      height: 300px;
      background-image: url('${CNLogo}');
      background-position: center;
      background-size: 114.2%;
      margin: 80px 30px;
      border-radius: 100%;
      filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
      &:nth-child(2) {
        background-image: url('${AACLogo}');
        border-radius: 0;
        background-repeat: no-repeat;
        background-size: cover;
        width: 420px;
      }
    }
  }
`;

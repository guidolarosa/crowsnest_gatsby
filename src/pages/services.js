import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import {Helmet} from 'react-helmet';
import theme from './../utils/theme';
import Header from '../common/Header';
import backgroundImage from '../images/services.jpeg';
import Title from './../common/Title';
import Container from './../common/Container';
import Footer from './../common/Footer';
import { breakpoints } from './../utils/theme';

const ServicesPage = () => (
  <ThemeProvider theme={theme}>
    <StyledServicesPage>
          <Helmet>
            <title>Crows Nest - Professional Color Grading | Nuestros servicios</title>
          </Helmet>
        <Header>
          <div className={'services-hero'} style={{backgroundImage: `url(${backgroundImage})`}}></div>
        </Header>
        <main>
          <Container size={'medium'} className={'services-data'}>
            <Title content={'Nuestros Servicios'} />
            <p>
              Estamos junto a ustedes desde el planeamientos en la pre producción, el conformado del material, el color grading, damos asesoramiento artístico, realizamos QC de sus piezas y los acompañamos hasta la masterización final.
            </p>
            <p>
              Tenemos la tecnología, los conocimientos y el expertise necesario para resolver y asesorar al cliente en todo el camino de su material hasta sus deliveries al archivado y backup final. Cientos de trabajos avalan nuestra experiencia.
            </p>
            <section className={'services-breakdown'}>
              <p>
                Contamos con <strong>dos islas profesionales de color correction in house con monitores de 2,5K y 4K</strong>, además de estar equipada una de ellas con proyector digital para los clientes que deseen ver su trabajo en formato cinematográfico en una pantalla perlada de 120¨
              </p>
              <p>
                Estamos equipados también equipos portátiles de alta gama para la confección dailies CDL´s en rodaje y la creación de Lut´s en el set en casos que así lo requieran.
              </p>
              <p>
                Utilizamos soft de color correction DaVinci Resolve Studio y Assimilate Scratch VR, instrumentos de medición de señales portables y tecnología de calibración de monitores X-Rite.
              </p>
            </section>
            <section className={'budgets'}>
              <Title content={'Presupuestos Flexibles'} />
              <p>
                Nos adaptamos a cada tipo de necesidad y presupuesto. Cada caso en particular es estudiado y siempre podemos adaptarlo. Contamos variantes de formas de trabajo que pueden realizarse para economizar recursos sin perder calidad final, para satisfacer la demanda del mercado.
              </p>
            </section>
          </Container>
        </main>
        <Footer />
    </StyledServicesPage>
  </ThemeProvider>
)

export default ServicesPage;

const StyledServicesPage = styled.section`
    background: ${(props) => (props.theme.background)};
    header {
      min-height: 40vh;
      .services-hero {
        background-size: auto 500px;
        height: 100%;
        width: 100%;
        flex-grow: 1;
        background-position: center;
      }
    }
    .services-data {
      margin-top: 60px;
      margin-bottom: 120px;
      font-size: 22px;
      line-height: 30px;
      font-weight: 300;
      padding-right: 10%;
      p {
        opacity: .7;
      }
      .budgets {
        margin-top: 80px;
      }
    }
    @media screen and (max-width: ${breakpoints.md + 'px'}) {
      header {
        min-height: unset;
        .services-hero {
          height: 230px;
          flex-grow: unset;
          background-size: 300%;
          background-position: 90%;
        }
      }
    }
`;

import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import {Helmet} from 'react-helmet';
import theme from './../utils/theme';
import Header from '../common/Header';
import topServicesImage from '../images/services/detalle_2.jpg';
import daVinciImage from '../images/davinci.png';
import Container from './../common/Container';
import Footer from './../common/Footer';
import { breakpoints } from './../utils/theme';

import SalaProyeccion from './../images/services/sala_proyeccion.jpg'
import SalaProyeccion2 from './../images/services/sala_proyeccion2.jpg'
import SalaConformado from './../images/services/sala_conformado_color.jpg'
import SalaConformado2 from './../images/services/detalle_sala_conformado.jpg'
import SalaFX from './../images/services/mym_post.jpg'
import Terraza from './../images/services/terraza.jpg'
import SalaReuniones from './../images/services/sala_reuniones.jpg'

const ServicesPage = () => (
  <ThemeProvider theme={theme}>
    <StyledServicesPage>
          <Helmet>
            <title>Crows Nest - Professional Color Grading | Nuestros servicios</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
          </Helmet>
        <Header>
          {/* <div className={'services-hero'} style={{backgroundImage: `url(${backgroundImage})`}}></div> */}
        </Header>
        <main>
          <Container size="full" className="services-data">
            <div className="services-block ">
              <div className="background-image"></div>
              <Container size="medium" >
                <div className="text-box">
                  <h2>Con un ojo siempre en el color</h2>
                  <p>
                    Acompañamos a nuestros clientes desde el <strong>planeamiento en la pre producción, el conformado del material, el color grading, damos asesoramiento artístico, realizamos QC de sus piezas</strong> y los acompañamos hasta la <strong>masterización final.</strong>
                  </p>
                </div>
              </Container>
            </div>
          </Container>
          <Container size={'medium'} className={'services-data'}>
            <div className="services-block equipment-block">
              <div className="background-image"></div>
              <div className="text-box">
                <h2>Hay equipo(s)</h2>
                <p>
                  Contamos con <strong>dos islas profesionales de color correction in house con monitores de 2,5K y 4K</strong>, además de estar equipada una de ellas con proyector digital para los clientes que deseen ver su trabajo en formato cinematográfico en pantalla perlada de 120¨
                </p>
                <p>
                  Estamos equipados también <strong>equipos portátiles de alta gama para la confección dailies CDL's en rodaje y la creación de Lut´s</strong> en el set en casos que así lo requieran.
                </p>
                <p>
                  Utilizamos soft de color correction DaVinci Resolve Studio y Assimilate Scratch VR, instrumentos de medición de señales portables y tecnología de calibración de monitores X-Rite.
                </p>
                {/* <a className="show-full-list-link" href="#">
                  Ver listado completo de equipos
                </a> */}
              </div>
            </div>
            <section className="salas">
              <h1>Nuestras Salas</h1>
              <div className="sala">
                <h2 className="title-sala">Sala de Proyección</h2>
                <div class="images">
                  <img src={SalaProyeccion} />
                  <img src={SalaProyeccion2} />
                </div>
              </div>
              <div className="sala">
                <h2 className="title-sala">Sala de Conformado y Grading</h2>
                <div className="images">
                  <img src={SalaConformado} />
                  <img src={SalaConformado2} />
                </div>
              </div>
              <div className="sala">
                <h2 className="title-sala">Sala de VFX - MyM Post</h2>
                <img src={SalaFX} />
              </div>
              <div className="sala">
                <h2 className="title-sala">Amenities</h2>
                <img src={SalaReuniones} />
              </div>
              <div className="sala">
                <h2 className="title-sala">Terraza</h2>
                <img src={Terraza} />
              </div>
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
      /* min-height: 40vh; */
      .services-hero {
        background-size: auto 500px;
        height: 100%;
        width: 100%;
        flex-grow: 1;
        background-position: center;
      }
    }
    .services-data {
      margin-top: 86px;
      margin-bottom: 120px;
      font-size: 22px;
      line-height: 30px;
      font-weight: 300;
      &:first-child {
        margin-top: 0;
        margin-bottom: 0;
        .services-block {
          height: 680px;
          margin-bottom: 0;
          padding-top: 80px;
          position: relative;
          @media screen and (max-width: ${breakpoints.md + 'px'}) {
            padding-top: 0px;
          }
          .background-image {
            width: 100%;
            height: inherit;
            background-color: ${(props) => (props.theme.accent)};
            /* border-radius: 20px; */
            background-image: url(${topServicesImage});
            background-size: 1680px;
            background-position: center;
            background-repeat: no-repeat;
          }
          .default-container {
            @media screen and (max-width: ${breakpoints.md + 'px'}) {
              position: absolute;
              top: 40px;
              left: 40px;
              width: 80%;
              h2 {
                font-size: 48px !important;
                line-height: 56px !important;
              }
            }
            .text-box {
              max-width: 480px;
              h2 {
                font-size: 64px;
                font-weight: 300;
                line-height: 72px;
              }
            }
          }
        }
      }
      .services-block {
        width: 100%;
        position: relative;
        margin-bottom: 88px;
        .background-image {
          position: absolute;
          height: inherit;
          width: 623px;
          left: 0;
          top: 0;
          background-size: 100%;
          background-image: url(${daVinciImage});
          @media screen and (max-width: ${breakpoints.md + 'px'}) {
            position: relative;
            width: 100%;
            height: 320px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
        .text-box {
          padding: 24px;
          padding-top: 32px;
          border-radius: 20px;
          background: rgba(0,0,0,.8);
          font-size: 18px;
          font-weight: 300;
          backdrop-filter: blur(5px);
          h2 {
            font-size: 32px;
            padding-right: 40px;
            line-height: 48px;
          }
          p {
            opacity: .7;
            strong {
              font-weight: 500;
            }
          }
        }
      }
      .equipment-block {
        display: flex;
        height: 536px;
        @media screen and (max-width: ${breakpoints.md + 'px'}) {
          flex-direction: column;
          height: unset;
        }
        .text-box {
          right: 0;
          width: calc(100% - 480px);
          margin-left: auto;
          @media screen and (max-width: ${breakpoints.md + 'px'}) {
            width: 100%;
          }
          .show-full-list-link {
            text-decoration: none;
            font-weight: 400;
            border-bottom: 1px solid ${(props) => (props.theme.accent)};
            padding-bottom: 4px;
          }
        }
      }
      .main-block {
        height: 636px;
        @media screen and (max-width: ${breakpoints.md + 'px'}) {
          margin-bottom: 260px;
        }
        .background-image {
          width: 100%;
          height: inherit;
          background-color: ${(props) => (props.theme.accent)};
          border-radius: 20px;
          background-image: url(${topServicesImage});
          background-size: cover;
          background-position: center 20%;
        }
        .text-box {
          width: 380px;
          top: 24px;
          left: 24px;
          position: absolute;
          @media screen and (max-width: ${breakpoints.md + 'px'}) {
            width: calc(100% - 48px);
            position: absolute;
            /* top: 200px; */
          }
        }
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
          display: none;
        }
      }
    }
    .sala {
      margin-bottom: 80px;
      img {
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      }
      .images {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: ${breakpoints.md + 'px'}) {
          flex-direction: column;
        }
        img {
          width: 49%;
          @media screen and (max-width: ${breakpoints.md + 'px'}) {
            width: 100%;
            margin-top: 32px;
          }
        }
      }
    }
`;

import React from "react"
import styled, {ThemeProvider} from 'styled-components';
import { Helmet } from 'react-helmet';
import theme, {boxShadow, breakpoints} from './../utils/theme';
import Header from '../common/Header';
import Container from './../common/Container';
import Title from './../common/Title';
import Footer from './../common/Footer';

import { graphql } from 'gatsby';

const EducationPage = ({data}) => {
  let educationItems = data.allPrismicEducacional.nodes[0].dataRaw.body;

  educationItems.map((item) => {
    console.log(item);
  })
  
  return (
    <ThemeProvider theme={theme}>
      <StyledEducationPage>
          <Helmet>
            <title>Crows Nest - Professional Color Grading | Educación</title>
          </Helmet>
          <Header>
          </Header>
          <Container size={'medium'}>
            <main>
              <section className={'education-content'}>
                <Title content={'Nuestros cursos'} />
                <p>
                  Dictamos <strong>cursos de manejo de software de color de forma personalizada e individual</strong>, ya sean aspirantes a coloristas que desean profundizar conocimientos, directores de fotografía, editores, montajistas o vfx´s  para actualizarlos en el manejo de nuevas versiones de software de corrección de color del mercado, tips y estrategias para realizar proyectos desde su inicio.
                </p>
                <p>
                  Realizamos también <strong>tutorías para ¨coloristas noveles¨</strong> que desean tomar sus primeros pasos en este oficio de manera correcta acompañándolos y aconcejándolos en sus proyectos <strong>de la mano de verdaderos coloristas profesionales con cualquiera de las herramientas</strong> utilizadas en la actualidad, haciendo hincapié en las formas de trabajo y métodos más eficientes en los flujos de trabajo actuales.
                </p>
                <p>
                  También <strong>diseñamos cursos a medida, capacitaciones y workshops de Color Grading y Software</strong> para empresas, productoras y casas de post-producción que necesitan actualizarse en el manejo y conocimiento de nuevas tecnologías de corrección de color, y a estudiantes universitarios o de carreras afines a la educación audiovisual, tanto <strong>en el país como en el exterior</strong>.
                </p>
              </section>
              <Container size={'full'}>
                <Container size={'medium'}>
                  <span className={'gallery-header'}>
                    Las siguientes instituciones se han capacitado con nosotros
                  </span>
                  <div className={'educational-gallery'}>
                      <div className="logo-list">
                        {educationItems.map((item) => (
                          <img title={item.primary.place[0].text} src={item.primary.logo.url} />
                        ))}
                      </div>
                  </div>
                </Container>
              </Container>
            </main>
          </Container>
        <Footer />
      </StyledEducationPage>
    </ThemeProvider>
  )
}

export default EducationPage;

const StyledEducationPage = styled.section`
  background: ${(props) => (props.theme.background)};
  main {
    padding-bottom: 120px;
    .education-content {
      margin-top: 60px;
      padding-right: 30%;
      p {
        font-size: 22px;
        line-height: 30px;
        font-weight: 300;
        opacity: .7;
        letter-spacing: 1px;
      }
    }
    .gallery-header {
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      display: block;
      margin: 60px 0;
    }
    .educational-gallery {
      margin-top: 30px;
      border: 1px solid ${(props) => (props.theme.grey400)};
      background: ${(props) => (props.theme.grey600)};
      border-radius: 20px;
      padding: 16px;
      box-shadow: ${boxShadow.md};
      .logo-list {
        display: flex;
        flex-wrap: wrap;
        display: grid;
        grid-column-gap: 20px;
        grid-row-gap: 24px;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: 120px;
        img {
          max-height: 100px;
          filter: grayscale(1);
          margin: 0 auto;
          border-radius: 5px;
          transition: ease-in-out 0.2s filter;
          &:hover {
            filter: grayscale(0);
          }
        }
      }
    }
  }
  @media screen and (max-width: ${breakpoints.md + 'px'}) {
    main {
      .education-content {
        padding-right: 0;
      }
      .educational-gallery {
        .logo-list {
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 10px;
          grid-auto-rows: 80px;
        }
      }
    }
  }
`;

export const query = graphql`
  query Education {
    allPrismicEducacional {
      nodes {
        dataRaw
      }
    }
  }
`;


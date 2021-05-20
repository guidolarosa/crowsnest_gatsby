import React from "react"
import styled, {ThemeProvider} from 'styled-components';
import { Helmet } from 'react-helmet';
import theme from './../utils/theme';
import Header from '../common/Header';
import Container from './../common/Container';
import Title from './../common/Title';
import Footer from './../common/Footer';

import { graphql } from 'gatsby';

const EducationPage = ({data}) => {
  let educationItems = data.allPrismicEducacional.nodes[0].dataRaw.body;
  
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
                Dictamos cursos de manejo de software de color de forma personalizada e individual, ya sean aspirantes a coloristas que desean profundizar conocimientos, directores de fotografía, editores, montajistas o vfx´s  para actualizarlos en el manejo de nuevas versiones de software de corrección de color del mercado, tips y estrategias para realizar proyectos desde su inicio; realizamos también tutorías para ¨coloristas noveles¨ que desean aprender sus primeros pasos en este oficio de manera correcta acompañándolos y aconcejándolos en sus proyectos de la mano de verdaderos coloristas profesionales con cualquier  herramienta utilizadas en la actualidad haciendo hincapié en las formas de trabajo y métodos más eficientes en los flujos de trabajo actuales.
              </p>
              <p>
                También diseñamos cursos a medida, capacitaciones y workshops de Color Grading y Software para empresas, productoras, casas de postproducción y a estudiantes universitarios o de carreras afines a la educación audiovisual, tanto en el país como en el exterior que necesitan actualizarse en el manejo y conocimiento de nuevas tecnologías de corrección de color.
              </p>
            </section>
            <Container size={'full'}>
              <Container size={'medium'}>
                <span className={'gallery-header'}>
                  Las siguientes instituciones se han capacitado con nosotros
                </span>
                <div className={'educational-gallery'}>
                    <div className="logo-list">
                      {educationItems.map((logo) => (
                        <img src={logo.primary.logo.url} />
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
      .logo-list {
        display: flex;
        flex-wrap: wrap;
        display: grid;
        grid-column-gap: 20px;
        grid-row-gap: 24px;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 120px;
        img {
          max-height: 120px;
          filter: grayscale(1);
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


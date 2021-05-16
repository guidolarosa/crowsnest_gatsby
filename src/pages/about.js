import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import theme from './../utils/theme';
import Header from '../common/Header';
import Container from './../common/Container';
import Title from './../common/Title';

const AboutPage = () => (
  <ThemeProvider theme={theme}>
    <StyledAboutPage>
        <Header>
        </Header>
        <Container size={'medium'}>
          <main>
            <section className="about-us-content">
              <Title className={'title-container'} content={'¿Qué es Crows Nest?'} />
              <p>
                Crows Nest PCG es una empresa dedicada al <strong>color grading</strong> y <strong>post producción de color</strong> en todas sus etapas, desde el asesoramiento en pre-producción ¨look book¨, pasando por la supervisión en rodaje hasta el mastering final de la obra, creando y diseñando el flujo de trabajo particular de cada proyecto, desde los ¨in house¨, hasta trabajos internacionales en forma remota.
              </p>
              <p>
                Nuestros trabajos y los años de experiencia avalan nuestra labor diaria; largometrajes, series, comerciales, cortometrajes, videoclips y trabajos para TV y web son nuestra tarea de cada día, todos los días.
              </p>
              <p>
                Contamos con el conocimiento ganado en los últimos 20 años de trabajo para el diseño y asesoramiento de salas de Color Grading profesionales para productoras y casas de post que lo necesiten, considerando la ambientación técnica adecuada, desde la pintura de la sala, pasando por la iluminación, los muebles y hasta el hardware necesario según el tipo de trabajos que se deseen afrontar. Somos los primeros en utilizar, desarrollar y actualizar equipos profesionales de corrección de color y armar salas de color grading profesional en el país.
              </p>
            </section>
          </main>
        </Container>
    </StyledAboutPage>
  </ThemeProvider>
)

export default AboutPage;

const StyledAboutPage = styled.section`
  background: ${(props) => (props.theme.background)};
  min-height: 100vh;
  .about-us-content {
    margin-top: 64px;
    p {
      font-weight: 200;
      font-size: 22px;
      line-height: 30px;
      padding-right: 30%;
    }
  }
  .title-container {
    padding-right: 30%;
  }
`;

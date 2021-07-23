import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import { Helmet } from 'react-helmet';
import theme, { breakpoints } from './../utils/theme';
import Header from '../common/Header';
import Container from './../common/Container';
import Title from './../common/Title';
import AssociateCard from './components/AssociateCard'
import Footer from './../common/Footer';
import eduSierraPic from '../images/edu_sierra.webp';
import lauraPic from '../images/laura.jpg';
import fernandoPic from '../images/fernando.png';
import backgroundImage from '../images/hero_background.png';

const AboutPage = () => {
  const associateData = [
    {
      name: 'Laura Viviani',
      image: lauraPic,
      bioContent: [
        <p>Pionera en Intermedio Digital en el país, y prolífera colorista de cine digital con infinidad de producciones cinematográficas y publicitarias en su currículum. Es socia fundadora de la Asociación Argentina de Coloristas Audiovisuales (AAC).</p>,
        <p>Es la instructora oficial de Assimilate Scratch en la Argentina y docente de Manejo del Color en Postproducción en la ENERC.</p>,
        <p>También dicta seminarios en el interior del país y Uruguay .Estudió diseño de Imagen y Sonido UBA y es socia fundadora de la escuela PuntoCINE, institución de formación de grado y postgrado interdisciplinaria en las áreas de realización, postproducción y animación, desarrolladas por profesionales en actividad del medio.</p>
      ]
    },
    {
      name: 'Edu Sierra',
      image: eduSierraPic,
      bioContent: [
        <p>Es el colorista con mayor experiencia profesional en actividad de la Argentina. Su experiencia inicial fue en laboratorio cinematográfico y es uno de los primeros coloristas en transfer de película a video en Argentina; su trabajo se combina entre su desempeño en Intermedio Digital (DI ) y las últimas tecnologías de corrección de color de cinematografía digital. Su currículum posee innumerables realizaciones cinematográficas y publicitarias.</p>,
        <p>Fundador de Cinefoto, el primer medio digital sobre divulgación tecnológica e intercambio de experiencias profesionales de Argentina.</p>,
        <p>Es socio fundador de la Asociación Argentina de Coloristas Audiovisuales(AAC) y además miembro de la Color Society Internacional (CSI), la Society of Motion Pictures and Television Ingenieers (SMPTE), Independient Colorist Guild (ICG) y la Asociación de Autores de Fotografía Cinematográfica de Argentina (ADF).</p>,
        <p>Su experiencia docente está avalada por su actividad en CFP SICA, ENERC, FUC y seminarios dictados en UNA, UNT, EPCTV, UNICEN, UNLP lo que también lo llevó a formar su propia escuela de especialización en postproducción cinematográfica: PuntoCine.</p>,
        <p>En el exterior ha dictado Cursos de Scratch, Da Vinci Resolve y Color Grading en Pixelovers de Chile, en el TOA y la Universidad Católica del Uruguay. Mantiene ademas su actividad profesional como consultor de color y Colorista Senior en Metrovisión S.A. Y Cinecolor Digital.</p>
      ]
    },
    {
      name: 'Fernando Rivas',
      image: fernandoPic,
      bioContent: [
        <p>Colorista referente del departamento Color Grading de Telefe/VIACOM Argentina, formador de los coloristas de la empresa, e instructor de Davinci Resolve y docente del curso de Cine Digital en el centro de formación y laboratorio PuntoCINE. Es socio fundador de la Asociación Argentina de Coloristas Audiovisuales (AAC). Como docente también ha dictado talleres y cursos de color en la Universidad de las Americas (Chile), en el Taller de Oficios Audiovisuales del Uruguay (TOA) y en la UNICEN (Universidad del Centro, Tandil).</p>,
        <p>Cuenta con amplia experiencia tanto en cine como en TV y demas flujos de color grading actuales, como asi tambien en  el montaje de departamentos técnicos de empresas líderes en postproducción de la Argentina como Metrovision, es tambien pionero en el manejo de la tecnologia HDR de la Argentina. Trabajó como consultor y colorista de post productoras como La Posta, UFA! Post y RGB Entertainment entre otros.</p>
      ]
    }
  ]
  return (
    <ThemeProvider theme={theme}>
      <StyledAboutPage>
          <Helmet>
            <title>Crows Nest - Professional Color Grading | Nosotros</title>
          </Helmet>
          <Header>
          </Header>
          <Container size={'full'}>
            <main>
              <section className={'about-us-content'}>
                <div className="background-image"></div>
                <Container size={'medium'}>
                  <div className={'about-us-text'}>
                    <Title className={'title-container'} content={'¿Qué es Crows Nest?'} />
                    <p>
                      Crows Nest PCG es una empresa dedicada al <strong>color grading</strong> y <strong>post producción de color</strong> en todas sus etapas, desde el <strong>asesoramiento en pre-producción (¨look book¨)</strong>, pasando por <strong>la supervisión en rodaje</strong> hasta el <strong>mastering final</strong> de la obra, creando y diseñando el flujo de trabajo particular de cada proyecto, desde los ¨in house¨, hasta trabajos internacionales en forma remota.
                    </p>
                    <p>
                      Largometrajes, series, comerciales, cortometrajes, videoclips y trabajos para TV y web son nuestra tarea de cada día, <strong>todos los días</strong>.
                    </p>
                    <p>
                      Contamos con <strong>20 años de experiencia en diseño y asesoramiento para salas de Color Grading profesionales a productoras y casas de post-producción</strong>, considerando la ambientación técnica adecuada; desde la pintura de la sala, pasando por la iluminación, los muebles, y hasta el hardware necesario según el tipo de trabajos que se deseen afrontar. 
                    </p>
                    <p>
                      Somos los <strong>primeros en utilizar, desarrollar y actualizar equipos profesionales de corrección de color</strong> y armar salas de color grading profesional en el país.
                    </p>
                  </div>
                </Container>
              </section>
              <Container size={'medium'}>
                <section className={'associates-content'}>
                  <Title className={'associates-title'} content={'Nosotros'} />
                  <section className={'associates-list'}>
                    {associateData.map((associate) => (
                      <AssociateCard content={associate}/>
                    ))}
                  </section>
                </section>
              </Container>
            </main>
          </Container>
          <Footer />
      </StyledAboutPage>
    </ThemeProvider>
  )
}

export default AboutPage;

const StyledAboutPage = styled.section`
  background: ${(props) => (props.theme.background)};
  min-height: 100vh;
  .about-us-content {
    /* margin-top: 60px; */
    position: relative;
    padding: 60px 32px 32px 0;
    .background-image {
      background-color: ${(props) => (props.theme.black)};
      background-image: url(${backgroundImage});
      width: 100%;
      height: 100%;
      background-size: cover;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 0;
      /* border-radius: 5px; */
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(90deg, ${(props) => (props.theme.black)} 30%, transparent)
      }
    }
    .about-us-text {
      position: relative;
      z-index: 1;
      p {
        font-weight: 200;
        font-size: 22px;
        line-height: 32px;
        padding-right: 30%;
        opacity: .7;
        strong {
          font-weight: 500;
        }
      }
      .title-container {
        padding-right: 30%;
      }
    }
  }
  .associates-content {
    margin-top: 40px;
    padding-bottom: 90px;
    .associates-list {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: ${breakpoints.md + 'px'}) {
    .about-us-content {
      .about-us-text {
        p {
          padding-right: 0;
        }
      }
    }
  }
`;

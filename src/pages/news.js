import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import theme from './../utils/theme';
import Header from '../common/Header';
import Title from '../common/Title';
import Container from '../common/Container';
import Footer from '../common/Footer';
import {breakpoints} from './../utils/theme';
import {graphql} from 'gatsby';

const NewsPage = ({data}) => {
  let news = data.allPrismicNoticias.nodes[0].dataRaw.body;

  const formatNewsPiece = (rawNewsPiece) => {
    const title = rawNewsPiece.primary.article_header[0].text;
    const thumbnailUrl = rawNewsPiece.primary.article_image.url;
    const excerpt = rawNewsPiece.primary.article_excerpt[0].text;
    const sourceUrl = rawNewsPiece.primary.article_link.url;
    const sourceName = rawNewsPiece.primary.news_portal[0]?.text;

    return {
      title: title,
      thumbnailUrl: thumbnailUrl,
      excerpt: excerpt,
      sourceUrl: sourceUrl,
      sourceName: sourceName
    };
  };
  
  return (
    <ThemeProvider theme={theme}>
      <StyledNewsPage>
          <Header>
          </Header>
          <main>
            <Container size="medium" className={'novedades-content'}>
              <Title content={'Últimas novedades'} />
              <ul className={'news-list'}>
                {news.map((rawNewsPiece) => {
                  let newsPiece = formatNewsPiece(rawNewsPiece);
                  return (
                    <li className={'news-item'}>
                        <div className={'thumbnail'} style={{backgroundImage: `url(${newsPiece.thumbnailUrl})`}}></div>
                        <section className={'news-details'}>
                          <h3 className={'title'}>{newsPiece.title}</h3>
                          <p className={'excerpt'}>{newsPiece.excerpt}</p>
                          <section className={'news-piece-footer'}>
                            <p className={'source'}>{newsPiece.sourceName}</p>
                            <a className={'source-link'} href={newsPiece.sourceUrl}>Ir a la nota</a>
                          </section>
                        </section>
                      </li>
                  )
                })}
              </ul>
            </Container>
          </main>
          <Footer />
      </StyledNewsPage>
    </ThemeProvider>
  );
}


export default NewsPage;

const StyledNewsPage = styled.section`
  background: ${(props) => (props.theme.background)};
  .novedades-content {
    margin-top: 60px;
    padding-bottom: 120px;
    .news-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 380px;
      grid-column-gap: 10px;
      grid-row-gap: 20px;
      list-style: none;
      padding: 0;
      margin: 0;
      @media screen and (max-width: ${breakpoints.md + 'px'}) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: ${breakpoints.s + 'px'}) {
        grid-template-columns: repeat(1, 1fr);
      }
      * {
        text-decoration: none;
      }
      .news-item {
        background: ${(props) => (props.theme.grey500)};
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        .thumbnail {
          width: 100%;
          min-height: 160px;
          background-size: cover;
          background-position: center;
        }
        .news-details {
          padding: 18px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          .title,
          .excerpt {
            display: -webkit-box;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            letter-spacing: 1px;
          }
          .title {
            font-size: 20px;
            margin-bottom: 8px;
            font-weight: 400;
            -webkit-line-clamp: 2;
          }
          .excerpt {
            font-size: 14px;
            opacity: .7;
            line-height: 20px;
            font-weight: 300;
            -webkit-line-clamp: 4;
          }
          .news-piece-footer {
            margin-top: auto;
            display: flex;
            justify-content: space-between;
            * {
              margin: 0;
              font-size: 14px;
            }
            .source-link {
              background: ${(props) => (props.theme.accent)};
              padding: 0 10px;
              border-radius: 2px;
              cursor: pointer;
              &:hover {
                background: ${(props) => (props.theme.accentLight)}
              }
            }
          }
        }
      }
    }
  }
`;

export const query = graphql`
  query News {
    allPrismicNoticias {
      nodes {
        dataRaw
      }
    }
  }
`;

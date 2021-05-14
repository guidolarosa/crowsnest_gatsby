import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import theme from './../utils/theme';
import Header from '../common/Header';

const NewsPage = () => (
  <ThemeProvider theme={theme}>
    <StyledNewsPage>
        <Header>
        </Header>
    </StyledNewsPage>
  </ThemeProvider>
)

export default NewsPage;

const StyledNewsPage = styled.section`
  background: ${(props) => (props.theme.background)};
`;

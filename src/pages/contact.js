import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import theme from './../utils/theme';
import Header from '../common/Header';

const EducationPage = () => (
  <ThemeProvider theme={theme}>
    <StyledEducationPage>
        <Header>
        </Header>
    </StyledEducationPage>
  </ThemeProvider>
)

export default EducationPage;

const StyledEducationPage = styled.section`
  background: ${(props) => (props.theme.background)};
`;

import * as React from "react"
import styled, {ThemeProvider} from 'styled-components';
import theme from './../utils/theme';
import Header from '../common/Header';

const ServicesPage = () => (
  <ThemeProvider theme={theme}>
    <StyledServicesPage>
        <Header>
        </Header>
    </StyledServicesPage>
  </ThemeProvider>
)

export default ServicesPage;

const StyledServicesPage = styled.section`
  background: ${(props) => (props.theme.background)};
`;

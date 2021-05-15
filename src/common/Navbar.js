import * as React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import Container from './../common/Container';
import Logo from './Logo';
import navigation from './../utils/navigation';

const Navbar = (props) => {
    return (
        <StyledNavbar size={'full'} className="navbar">
            <Container className="navbar-content" size={'medium'}>
                <Logo />
                <nav>
                    <ul>
                        {navigation.map((link) => (
                        <li key={link.url}>
                            <Link 
                                activeClassName={'active'} 
                                to={link.url}
                            >
                                {link.name}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </StyledNavbar>
    );
};

export default Navbar;

const StyledNavbar = styled(Container)`
    height: 118px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 50px 0 rgba(0,0,0,.7);
    .navbar-content {
        display: flex;
        justify-content: space-between;
        height: inherit;
        align-items: center;
        nav {
            ul {
                display: flex;
                margin: 0;
                padding: 0;
                li {
                    list-style: none;
                    margin-left: 32px;
                    a {
                        text-decoration: none;
                        font-weight: 200;
                        text-transform: capitalize;
                        font-size: 16px;
                        &.active {
                            font-weight: 500;
                            position: relative;
                            &:after {
                                content: '';
                                position: absolute;
                                left: 0;
                                bottom: -.5rem;
                                height: 1px;
                                width: 100%;
                                background: ${(props) => (props.theme.accent)}
                            }
                        }
                    }
                }
            }
        }
    }
`;
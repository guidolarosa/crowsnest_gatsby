import React, {useState} from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import Container from './../common/Container';
import Logo from './Logo';
import navigation from './../utils/navigation';
import { breakpoints } from './../utils/theme';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <StyledNavbar size={'full'} className="navbar">
            <Container className="navbar-content" size={'medium'}>
                <Link to={'/'} className={'logo-link'}>
                    <Logo />
                </Link>
                <nav className={isMenuOpen ? 'mobile-menu-open' : ''}>
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
                <div className="menu-trigger">
                    <GiHamburgerMenu onClick={handleMenuToggle}/>
                </div>
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
    background-color: ${(props) => (props.theme.background)};
    z-index: 1;
    .navbar-content {
        display: flex;
        justify-content: space-between;
        height: inherit;
        align-items: center;
        overflow: visible;
        .logo-link {
            text-decoration: none;
        }
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
                        position: relative;
                        &.active {
                            font-weight: 500;
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
    @media screen and (max-width: ${breakpoints.md + 'px'}) {
        height: 60px;
        .navbar-content {
            nav {
                pointer-events: none;
                position: absolute;
                opacity: 0;
                left: 0;
                height: calc(100vh - 60px);
                top: 200px;
                background: ${(props) => (props.theme.accent)};
                width: 100%;
                transition: ease-in-out 0.2s all;
                &.mobile-menu-open {
                    pointer-events: auto;
                    opacity: 1;
                    top: 60px;
                }
                ul {
                    display: flex;
                    flex-direction: column;
                    margin-top: 80px;
                    li {
                        margin-bottom: 40px;
                        a {
                            font-size: 48px;
                        }
                    }
                }
            }
        }
    }
`;
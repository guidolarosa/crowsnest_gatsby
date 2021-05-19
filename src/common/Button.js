import * as React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

const Button = (props) => {
    const {
        type,
        label,
        href,
        onClick,
        styleVariant,
        className
    } = props;

    return (
        <StyledButton className={className ? className : null}>
            {type === 'link' ? (
                <Link to={href}>{label}</Link>
            ) : (
                <button type={'button'} onClick={onClick} value={label} />
            )}
        </StyledButton>
    )
};

export default Button;

const StyledButton = styled.span`
    display: inline-block;
    a, button {
        background: ${(props) => (props.theme.accent)};
        padding: 18px;
        border-radius: 5px;
        text-decoration: none;
        font-size: 24px;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.7);
        width: 100%;
        display: inline-block;
        text-align: center;
        transition: ease-in-out 0.2s all;
        letter-spacing: 1px;
        &:hover {
            box-shadow: 0 2px 5px 0 rgba(0,0,0,.5);
            background: ${(props) => (props.theme.accentLight)}
        }
    }
`;


import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {breakpoints} from './../utils/theme';

const Container = (props) => {
    const {
        size,
        width,
        flex,
        padded,
        paddingSize,
        children,
        alignment,
        className,
        style,
        align
    } = props;

    return (
        <StyledContainer {...props}>
            {children}
        </StyledContainer>
    )
};

Container.propTypes = {
    size: PropTypes.string,
    flex: PropTypes.bool
}

Container.defaultProps = {
    size: 'full',
    width: null,
    flex: false,
    paddingSize: 'medium',
    align: 'center',
    children: (<p className="empty-message">Empty container</p>),
    className: 'default-container',
    style: {}
}

export default Container;

const handlePadding = (props) => {
    const declaredPaddingSize = props.paddingSize;

    const PADDING_VALUES = {
        'x-large': '64px',
        'large': '32px',
        'medium': '16px',
        'small': '8px',
        'x-small': '4px',
        'none' : '0'
    };

    if (props.padded) {
        return PADDING_VALUES[declaredPaddingSize];
    } else {
        return PADDING_VALUES['none'];
    }
};

const handleAlignment = (props) => {
    const ALIGN_VALUES = {
        'left': '0 auto 0 0',
        'center': '0 auto',
        'right': 'auto 0'
    }

    return ALIGN_VALUES[props.align]
}

const handleWidth = (props) => {
    // These values represent the maximum width for that width
    const declaredSize = props.size;
    const declaredWidth = props.width;

    const SIZE_VALUES = {
        'full': '100%',
        'x-large': '1400px',
        'large': '1200px',
        'medium': '992px',
        'small': '768px',
        'x-small': '576px'
    };

    if (declaredWidth) {
        return declaredWidth;
    };

    if (SIZE_VALUES[declaredSize]) {
        return SIZE_VALUES[declaredSize];
    } else {
        console.warn(`Width value "${declaredSize}" for Container is incorrect. Full width is implemented by default.`);
        return SIZE_VALUES['full'];
    }
};

const StyledContainer = styled.div`
    width: ${(props) => (handleWidth(props))};
    padding: ${(props) => (handlePadding(props))};
    margin: ${(props) => (handleAlignment(props))};
    display: ${(props) => (props.flex ? 'flex' : 'block')};
    .empty-message {
        opacity: .6;
    }
    @media screen and (max-width: ${breakpoints.l + 'px'}) {
        width: ${(props) => (props.size == 'full' ? '100%' : '80%')};
    }
    @media screen and (max-width: ${breakpoints.s + 'px'}) {
        width: ${(props) => (props.size == 'full' ? '100%' : 'calc(100% - 40px)')};
    }
`;
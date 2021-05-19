
import React from "react";
import styled from 'styled-components';

const GoogleMap = (props) => {
    const {src, width, height, darkMode, className} = props;
    return (
        <StyledGoogleMap 
            className={className || null}
            darkMode={darkMode} 
            width={width || "100%"}
            height={height || '400px'}
        >
            <iframe
                frameborder="0" style={{border:0}}
                src={src} 
                allowfullscreen />
        </StyledGoogleMap>
    )
}

const StyledGoogleMap = styled.div`
    width: 100%;
    iframe {
        filter: ${(props) => (props.darkMode ? 'invert(1)' : 'auto')};
        width: ${(props) => (props.width)};
        height: ${(props) => (props.height)};
        margin: 0;
    }
`;

export default GoogleMap;
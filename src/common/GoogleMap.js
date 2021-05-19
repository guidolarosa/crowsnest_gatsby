
import React from "react";
import styled from 'styled-components';

const GoogleMap = (props) => {
    const {src, width, height} = props;
    return (
        <StyledGoogleMap
            width={width || "100%"}
            height={height || '400px'}
            frameborder="0" style={{border:0}}
            src={src} 
            allowfullscreen>
        </StyledGoogleMap>
    )
}

const StyledGoogleMap = styled.iframe`
    border-radius: 20px;
`;

export default GoogleMap;
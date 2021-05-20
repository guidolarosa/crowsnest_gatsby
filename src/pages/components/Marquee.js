import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import $ from 'jquery';
import marquee from 'jquery.marquee';

// FIXME: Component not working properly

const Marquee = (props) => {

    // useEffect(() => {
    //     const marquees = $('.marquee');
    //     marquees.each((el) => {
    //         let marqueeElement = $(marquees[el]);
    //         marqueeElement.marquee({
    //             duration: 1000 * 40,
    //             gap: 10,
    //             delayBeforeStart: 0,
    //             direction: el % 2 === 0 ? 'left' : 'right',
    //             duplicated: true,
    //             startVisible: true,
    //             pauseOnHover: true
    //         });
    //     })
    //   }, []);

    return (
        <StyledMarquee className={'marquee'}>
            {props.content.map((marqueeItem, index) => (
                <img key={index} src={marqueeItem.primary.logo.url} />
            ))}
        </StyledMarquee>
    )
}

const StyledMarquee = styled.div`
    width: 100%;
    overflow: hidden;
`;

export default Marquee;
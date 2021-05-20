import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import $ from 'jquery';
import marquee from 'jquery.marquee';

const Marquee = (props) => {
    useEffect(() => {
        // console.log(marqueeRef.current);
        const marquees = $('.marquee');
        // console.log(marquees)
        marquees.each((el) => {
            let marqueeElement = $(marquees[el]);
            marqueeElement.marquee({
                duration: 1000 * 40,
                gap: 10,
                delayBeforeStart: 0,
                direction: el % 2 === 0 ? 'left' : 'right',
                duplicated: true,
                startVisible: true,
                pauseOnHover: true
            });
        })
      }, []);

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
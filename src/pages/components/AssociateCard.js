import React, {useState} from 'react';
import styled from 'styled-components';
import {IoChevronDownSharp, IoChevronUpSharp} from 'react-icons/io5';

const AssociateCard = (props) => {
    const {content} = props;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <StyledAssociateCard className={'associate-card'} isExpanded={isExpanded}>
            <div className="associate-image" style={{backgroundImage: `url(${content.image})`}}></div>
            <div className={'associate-details'}>
                <div className="associate-name">{content.name}</div>
                <div className="associate-bio">
                    {content.bioContent.map((bioParagraph) => (bioParagraph))}
                </div>
            </div>
            <div className={'expand-control'} onClick={() => {setIsExpanded(!isExpanded)}}>
                {!isExpanded ? 
                    <IoChevronDownSharp/>
                    : <IoChevronUpSharp/>
                }
            </div>
        </StyledAssociateCard>
    )
};

const StyledAssociateCard = styled.div`
    padding: 32px;
    background: ${(props) => (props.theme.grey600)};
    margin-bottom: 24px;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,0,0, .2);
    display: flex;
    overflow: hidden;
    max-height: ${(props) => (props.isExpanded ? 'unset' : '320px')};
    position: relative;
    .associate-image {
        min-width: 120px;
        height: 120px;
        border-radius: 60px;
        background: ${(props) => (props.theme.blue)};
    }
    .associate-details {
        padding-left: 24px;
        position: relative;
        .associate-name {
            font-size: 32px;
            margin-bottom: 24px;
            position: relative;
            &:after {
                width: 64px;
                height: 1px;
                background: ${(props) => (props.theme.accent)};
                content: '';
                bottom: -12px;
                left: 0;
                position: absolute;
            }
        }
        .associate-bio {
            p {
                font-weight: 200;
                opacity: .7;
                font-size: 20px;
                line-height: 32px;
            }
        }
    }
    .expand-control {
        position: absolute;
        width: calc(100% - 160px);
        padding-right: 34px;
        padding-top: 60px;
        height: 120px;
        bottom: 0;
        left: 160px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        cursor: pointer;
        background: ${(props) => (props.isExpanded ? 'unset' : `linear-gradient(0deg,  #303030 25%, transparent)`)};
        font-weight: 600;
        font-size: 24px;
        /* color: ${(props) => (props.theme.accent)}; */
    }
`;

export default AssociateCard;
import React, {useState} from 'react';
import styled from 'styled-components';
import {IoChevronDownSharp, IoChevronUpSharp} from 'react-icons/io5';
import {breakpoints} from './../../utils/theme';

const AssociateCard = (props) => {
    const {content} = props;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <StyledAssociateCard className={'associate-card'} isExpanded={isExpanded}>
            <div className="associate-image" style={{backgroundImage: `url(${content?.image})`}}></div>
            <div className={'associate-details'}>
                <div className="associate-name">{content?.name}</div>
                <div className="associate-bio">
                    {content?.bioContent.map((bioParagraph) => (bioParagraph))}
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
        background-size: 90%;
        background-position: center;
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
        background: linear-gradient(0deg, ${(props) => (props.theme.grey600)} 25%, transparent);
        background: ${(props) => (props.isExpanded && 'unset')};
        font-weight: 600;
        font-size: 24px;
    }
    @media screen and (max-width: ${breakpoints.md + 'px'}) {
        flex-direction: column;
        max-height: ${(props) => (props.isExpanded ? 'unset' : '520px')};
        align-items: center;
        .associate-image {
            min-height: 120px;
            width: 120px;
            margin-bottom: 12px;
        }
        .associate-details {
            padding-left: 0;
            .associate-name {
                text-align: center;
                &:after {
                    left: calc(50% - 32px);
                }
            }
        }
        .expand-control {
            width: 100%;
            left: 0;
        }
    }
`;

export default AssociateCard;
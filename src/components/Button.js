import React from 'react'
import styled from "styled-components";

const PrimaryButton = styled.button`
    padding: 12px 24px 16px 24px;
    background: linear-gradient(90deg, #FDC03C 0%, #FFD08A 100%);
    border: none;
    font-size: 1.6rem;

    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, #F2A93C 0%, #FFEACB 100%);
    }
`;

const SecButton = styled.button`
    padding: 12px 24px;
    background: linear-gradient(90deg, #5C6263 0%, #0A0D16 100%);
    color: #f2f1eb;
    border: none;

    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, #989E9E 0%, #2F2F2F 100%);
    }
`;

export default ({ children, ...props }) => {
    return (
        <PrimaryButton {...props}>{children}</PrimaryButton>
    )
}

export const SecondaryButton = ({ children, ...props }) => {
    return (
        <SecButton {...props}>{children}</SecButton>
    )
}
import React from 'react'
import styled from "styled-components";

const PrimaryButton = styled.button`
    padding: 12px 24px;
    background: linear-gradient(90deg, #FDC03C 0%, #FFD08A 100%);
    border: none;
`;

const SecButton = styled.button`
    padding: 12px 24px;
    background: linear-gradient(90deg, #5C6263 0%, #0A0D16 100%);
    color: white;
    border: none;
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
'use client'

import { colors } from "@/constants";
import styled from "styled-components";
import css from "styled-jsx/css";

const StyledButton = styled.div`
    padding: 10px 20px;
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${(props) => {
        switch (props.$type) {
            case 'action':
                return css`
                    background-color: ${colors.headingText};
                    color: ${colors.text};
                `;
            default:
                return css`
                    background-color: ${colors.layer2};
                    color: ${colors.headingText};
                `;
        }
    }}
`;

const Button = ({children, type}) => {
    return <StyledButton $type={type}>{children}</StyledButton>
}
export { Button };
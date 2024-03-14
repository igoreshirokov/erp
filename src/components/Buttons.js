'use client'

import { colors } from "@/constants";
import styled from "styled-components";
import css from "styled-jsx/css";

const StyledPlusButton = styled.div`
cursor: pointer;
margin: 40px 40px;
display: flex;
align-items: center;
gap: 20px;
color: ${colors.headingText};
`;

const StyledButton = styled.div`
    padding: 10px 20px;
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    ${(props) => {
        switch (props.$type) {
            case 'action':
                return {
                    backgroundColor: colors.headingText,
                    color: colors.text
                }
            default:
                return {
                    backgroundColor: colors.layer2,
                    color: colors.headingText
                }
        }
    }}
`;

const StyledButtonClose = styled.div`
cursor: pointer;
`

const Button = ({children, type, action}) => {
    return <StyledButton onClick={action} $type={type}>{children}</StyledButton>
}

const ButtonPlus = ({children, action}) => {
    return <StyledPlusButton onClick={action}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" fill="#161616" />
            <rect x="5.7981" y="21.3263" width="38.5" height="6.5" fill="#D8AD3E" />
            <rect x="28.4255" y="5.7699" width="38.5" height="6.5" transform="rotate(90 28.4255 5.7699)" fill="#D8AD3E" />
        </svg>
        <span>
            {children}
        </span>
    </StyledPlusButton>
}

const ButtonClose = ({children, action, style}) => {
    return <StyledButtonClose onClick={action} style={style}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" fill="#161616" />
            <rect x="9" y="36" width="38.5" height="6.5" transform="rotate(-45 9 36)" fill="#D8AD3E" />
            <rect x="14" y="9" width="38.5" height="6.5" transform="rotate(45 14 9)" fill="#D8AD3E" />
        </svg>
        <span>{children}</span>
    </StyledButtonClose>
}
export { Button, ButtonPlus, ButtonClose };
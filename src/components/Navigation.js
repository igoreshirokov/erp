"use client"

import { colors } from "@/constants";
import styled from "styled-components";
import { usePathname } from "next/navigation"; 

const { default: Link } = require("next/link");
const { useState, useEffect } = require("react");

const NavigationItem = ({href, children}) => {
    const pathname = usePathname();
    const [active, setActive] = useState(false);
    
    useEffect(() => pathname === href ? setActive(true) : setActive(false), [pathname]);

    const StyledItem = styled.div`
        color: ${active ? colors.text : colors.headingText};
        background-color: ${!active ? colors.layer2 : colors.headingText};
        padding: 20px 20px;
    `;

    return (
            <Link href={href}>
                <StyledItem active>
                    {children}
                </StyledItem>
            </Link>
    );
}

const NavigationList = styled.div`
    background-color: ${colors.layer2};
    height: ${open ? `100vh` : `0`};
    width: ${open ? `300px` : `0px`};
    transition: .3s;
`;

const NavigationToggleBtn = styled.div`
    background-color: red;
    width: 50px;
    height: 50px;
    cursor: pointer;
`;
const NavigationWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row-reverse;
    top: 0;
    left: 0;
    z-index: 100;
`


function Navigation() {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    }
    return (
        <NavigationWrapper>
            <NavigationToggleBtn open onClick={() => toggleMenu()}>
                {!open 
                    ? <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" fill="#161616" />
                        <rect x="6" y="10" width="38.5" height="6.5" fill="#D8AD3E" />
                        <rect x="6" y="21.5" width="38.5" height="6.5" fill="#D8AD3E" />
                        <rect x="6" y="33" width="38.5" height="6.5" fill="#D8AD3E" />
                    </svg> 
                : 
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" fill="#161616" />
                        <rect x="9" y="36" width="38.5" height="6.5" transform="rotate(-45 9 36)" fill="#D8AD3E" />
                        <rect x="14" y="9" width="38.5" height="6.5" transform="rotate(45 14 9)" fill="#D8AD3E" />
                    </svg>
                }

            </NavigationToggleBtn>
            {open && <NavigationList open={open}>
                <NavigationItem href="/">
                    Заказы на производство
                </NavigationItem>
                <NavigationItem href="/orders">
                    Заказы на производство
                </NavigationItem>
            </NavigationList>}
        </NavigationWrapper>
    )
}

export { Navigation };
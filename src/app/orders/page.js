'use client'
import { H1 } from "@/components/Headings";
import { ListOrders } from "./list";
import { Button } from "@/components/Buttons";
import Link from "next/link";
import { colors } from "@/constants";
import styled from "styled-components";

const StyledWrapper = styled.div`
    margin-top: 50px;
`;

export default function Orders() {
    return (
        <main className="orders-wrapper">
            <H1>Заказы на производство</H1>
            <StyledWrapper>
                <Link href="/orders/add">
                    <Button type="action">Новый заказ</Button>
                </Link>
                <ListOrders />
            </StyledWrapper>
        </main>
    )
}
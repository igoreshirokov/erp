'use client'
import { colors } from "@/constants";
import styled from "styled-components"
import { useEffect, useState } from "react";
import { getListOrders } from "./listAction";
import { LoadingList } from "@/components/Loaders";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Table = styled.div`
    display: table;
    width: 100%;
`;
const Row = styled.div`
    display: table-row;
    &:nth-child(odd) {
        background-color: ${colors.layer2};
    }
`;
const TH = styled.div`
    padding: 10px 20px;
    display: table-cell;
    `;
const TD = styled.div`
    padding: 10px 20px;
    display: table-cell;
`;

function ListOrders() {
    const [list, setList] = useState([]);
    const router = useRouter();
    useEffect(() => {
        getListOrders().then(r => setList(r));
    }, []);

    if (!list.length) {
        return <LoadingList />
    }

    return (
        <Table>
            <Row>
                <TH>ID</TH>
                <TH>Статус</TH>
                <TH>Дата</TH>
                <TH># Заказа</TH>
                <TH>Менеджер</TH>
                <TH>Комментарий</TH>
            </Row>
            {list.map((item, index) => {
                return (
                    <Row className="row-cursor" onClick={() => router.push(`orders/${item.id}`)}>
                        <TD>{item.id}</TD>
                        <TD>{item.date}</TD>
                        <TD>{item.order}</TD>
                        <TD>{item.name}</TD>
                        <TD>{item.comment}</TD>
                    </Row>
                )
            })}
        </Table>
    )
}

export {ListOrders};
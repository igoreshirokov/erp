'use client'
import { colors } from "@/constants";
import styled from "styled-components"

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
    return (
        <Table>
            <Row>
                <TH>Статус</TH>
                <TH>Дата</TH>
                <TH># Заказа</TH>
                <TH>Менеджер</TH>
                <TH>Комментарий</TH>
            </Row>
            <Row>
                <TD>В работе</TD>
                <TD>24.11.2023</TD>
                <TD>ШЮ-357</TD>
                <TD>Наталья</TD>
                <TD>Срочно!</TD>
            </Row>
        </Table>
    )
}

export {ListOrders};
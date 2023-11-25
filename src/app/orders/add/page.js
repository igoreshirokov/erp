import { Button } from "@/components/Buttons";
import { Form, Input, InputDate, Label, StyledFormCol, StyledFormRow } from "@/components/Form";
import { H1 } from "@/components/Headings";
import Link from "next/link";
import { ProductList } from "./products";

const FormContactBlock = () => {
    const getCurrentDate = () => {
        const curr = new Date();
        curr.setDate(curr.getDate());
        return curr.toISOString().substring(0, 10);
    }
    const currentDate = getCurrentDate();

    return (
        <StyledFormRow>
            <StyledFormCol>
                <Label>Менеджер</Label>
                <Input type="text" name="name"></Input>
            </StyledFormCol>
            <StyledFormCol>
                <Label>Номер заказа</Label>
                <Input type="text" name="order"></Input>
            </StyledFormCol>
            <StyledFormCol>
                <Label>Дата</Label>
                <InputDate name="date" defaultValue={currentDate} type="date" />
            </StyledFormCol>
        </StyledFormRow>
    )
}


export default function Add() {
    const formAction = async (e) => {
        'use server'
        console.log(e)
    }
    return (
        <>
            <Link href="/orders">
                <Button>Отменить</Button>
            </Link>
            <H1>Новый заказ</H1>
            <form action={formAction}>
                <StyledFormCol>
                    <FormContactBlock />
                    <ProductList />
                </StyledFormCol>
                <button type="submit">Отправить</button>
            </form>
        </>
    )
}
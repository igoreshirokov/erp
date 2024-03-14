'use client';

import { Input, InputDate, Label, StyledFormCol, StyledFormRow } from "@/components/Form";
import { ProductList } from "./products";
import { Button } from "@/components/Buttons";
import { formAction } from "./formAction";
import { useRef } from "react";
import { useRouter } from "next/navigation";

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


function prepareOrder(inputData) {
    const preparedData = {}
    inputData.forEach((value, key) => {
        const regex = /(\w+)\[(\d+)\]\[(\w+)\]/;
        const match = key.match(regex);
        if (match) {
            const category = match[1];
            const index = match[2];
            const property = match[3];

            if (!preparedData[category]) {
                preparedData[category] = [];
            }

            if (!preparedData[category][index]) {
                preparedData[category][index] = {};
            }

            preparedData[category][index][property] = value;
            return;
        }
        preparedData[key] = value;
    });
    return preparedData;
}

const FormOrder = () => {
    const router = useRouter();
    const formRef = useRef();
    const formHundle = (e) => {
        const formData = new FormData(formRef.current);
        const data = prepareOrder(formData);
        // Модальное окно для проверки введенных данных
        const result = formAction(data);
        result
            .then(r => {
                router.push(`/orders/${r.id}`)
            });
    }
    
    return (
        <form ref={formRef}>
            <StyledFormCol>
                <FormContactBlock />
                <ProductList />
            </StyledFormCol>
            <Button action={formHundle}>Отправить</Button>
        </form>
    )
}

export { FormOrder }
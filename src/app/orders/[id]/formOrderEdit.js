import { Input, InputDate, Label, StyledFormCol, StyledFormRow } from "@/components/Form";
const getCurrentDate = () => {
    const curr = new Date();
    curr.setDate(curr.getDate());
    return curr.toISOString().substring(0, 10);
}

const FormContactBlock = ({order}) => {
    const currentDate = getCurrentDate();

    return (
        <StyledFormRow>
            <StyledFormCol>
                <Label>Менеджер</Label>
                <Input value={order.name} type="text" name="name"></Input>
            </StyledFormCol>
            <StyledFormCol>
                <Label>Номер заказа {order.order}</Label>
                <Input type="text" name="order" value={order.order} ></Input>
            </StyledFormCol>
            <StyledFormCol>
                <Label>Дата</Label>
                <InputDate name="date" defaultValue={order.date} type="date" />
            </StyledFormCol>
        </StyledFormRow>
    )
}
function FormOrderEdit({order}) {
    
    return (
        <form>
            <FormContactBlock order={order} />
        </form>
    )
    
}

export { FormOrderEdit };
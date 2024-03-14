import { FormOrderEdit } from "./formOrderEdit";
import { InnerHeader } from "../inner_header";
import { getOrderById } from "@/db/OrderM";

export default async function Edit({params}) {
    const {id} = params;
    const order = await getOrderById(id);
    console.log(order)
    return (
        <>
            <InnerHeader title={`Заказ №${id}`} />
            {order && <FormOrderEdit order={order} />}
        </>
    )
}
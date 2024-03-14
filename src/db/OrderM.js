import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getList($args = [])
{
    const orders = await prisma.orderM.findMany({});
    return orders;
}

async function getOrderById(id)
{
    const order = await prisma.orderM.findUnique({
        where: {
            id: Number(id)
        }
    });
    order.products = await JSON.parse(order.products);
    return order;
}

async function createOrderM(data)
{
    return await prisma.orderM.create({
        data: {...data, products: JSON.stringify(data.products)}
    });
}

export { createOrderM, getOrderById, getList };
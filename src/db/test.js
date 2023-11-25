import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const OrderM = await prisma.OrderM.create({
        data: {
            title: 'Тестовый заказ на производство',
            content: 'Тело документа'
        }
    });
    console.log(OrderM);
}

function add_orderM() {
    main()
        .then(async () => {
            await prisma.$disconnect();
        })
        .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        });
}
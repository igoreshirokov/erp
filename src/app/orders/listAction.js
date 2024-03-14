'use server'
const { getList } = require("@/db/OrderM");

async function getListOrders()
{
    return await getList();
}
export { getListOrders };
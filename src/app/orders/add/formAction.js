'use server';

import { createOrderM } from "@/db/OrderM";

const formAction = async (data) => {
    return createOrderM(data);    
}

export { formAction };
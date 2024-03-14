import { Button } from "@/components/Buttons";
import { Form, Input, InputDate, Label, StyledFormCol, StyledFormRow } from "@/components/Form";
import { H1 } from "@/components/Headings";
import Link from "next/link";
import { ProductList } from "./products";
import { FormOrder } from "./formOrder";
import { InnerHeader } from "../inner_header";



export default function Add() {
    
   
    return (
        <>
            <InnerHeader />
            <FormOrder />
        </>
    )
}
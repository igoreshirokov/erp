'use client'
import { Button } from "@/components/Buttons";
import { Form, Input, InputDate, Label, StyledFormCol, StyledFormRow } from "@/components/Form";
import { H1 } from "@/components/Headings";
import Link from "next/link";
import { useId } from 'react';


class Product {
    constructor() {
        this.type='Тип';
        this.material1='Ткань 1';
        this.material2='Ткань 2';
        this.print='Принт';
        this.pododeyalnik='Пододеяльник';
        this.prostin='Простыня';
        this.navolochka='Наволочка';
        this.decorProstin='Декор простыни';
        this.decorNavolochca='Декор пододеяльника';
        this.comment='Комментарии';
    }
}

const ProductItem = ({product}) => {
    const keys = Object.keys(product);
    return (
        <div className="product-item">
            <StyledFormCol>
                {keys.map(key => {
                    return (
                        <div key={useId()} className="product-field">
                            <StyledFormCol>
                                <Label>{product[key]}</Label>
                                <Input type="text" name={`products[][${key}]`}></Input>
                            </StyledFormCol>
                        </div>
                    )
                })}
            </StyledFormCol>
        </div>
    )
}

const ProductList = () => {
    'use client'

    const { useState } = require('react');

    const [products, setProducts] = useState([new Product()]);
    
    const addProduct = () => {
        // setProducts([...products, new Product()]);
        console.log(products)
    }

    return (
        <div className="product-list">
            {products.map((product, index) => <ProductItem key={useId()} product={product} />)}
            <Button type="plus" onClick={() => addProduct()}>+</Button>
        </div>
    )
}

export { ProductList }
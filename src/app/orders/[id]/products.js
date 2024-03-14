'use client'
import { Button, ButtonClose, ButtonPlus } from "@/components/Buttons";
import { Form, Input, InputDate, Label, StyledFormCol, StyledFormRow, Textarea } from "@/components/Form";
import { H1, H2 } from "@/components/Headings";
import { colors } from "@/constants";
import Link from "next/link";
import { useId } from 'react';
import styled from "styled-components";


class Product {
    constructor() {
        this.name='Название';
        this.material1='Ткань 1';
        this.material2='Ткань 2';
        this.print='Принт';
        this.pododeyalnik='Пододеяльник';
        this.prostin='Простыня';
        this.navolochka='Наволочка';
        this.decor_prostin ='Декор простыни';
        this.decor_navolochca ='Декор пододеяльника';
        this.comment='Комментарии';
    }
}

const StyledProductItem = styled.div`
position: relative;
display: flex;
border: ${colors.headingText} solid 3px;
border-radius: 10px;
padding: 20px;
margin-top: 20px;
width: fit-content;

& label {
    margin-top: 20px;
    margin-bottom: 5px;
}
`

const StyledProductItemWrapper = styled.div`
display: flex;
`
const StyledProductFields = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    & .product-field {
        flex: 1;
    }

    & .product-field:first-child,
    & .product-field:last-child {
        flex: 100%;
    }

    & .comment {
        
    }
`
const ProductItem = ({product, index, remove}) => {
    const keys = Object.keys(product);
    return (
        <StyledProductItemWrapper>
            <StyledProductItem>
                <ButtonClose style={{position: 'absolute', top: 20, right: 20}} action={remove} />
                <StyledFormCol>
                    <H2>Товар {index + 1}</H2>
                    <StyledProductFields>
                        {keys.map(key => {
                            return (
                                <div key={useId()} className={`product-field ${key}`}>
                                    <StyledFormCol>
                                        <Label>{product[key]}</Label>
                                        {key == 'comment' ? 
                                            <Textarea name={`products[${index}][${key}]`}></Textarea>
                                            :
                                            <Input type="text" name={`products[${index}][${key}]`}></Input>
                                        }
                                    </StyledFormCol>
                                </div>
                            )
                        })}
                    </StyledProductFields>
                </StyledFormCol>
            </StyledProductItem>
        </StyledProductItemWrapper>
    )
}

const StyledProductList = styled.div`
display: flex;
flex-direction: column;

`

const ProductList = () => {
    'use client'

    const { useState } = require('react');

    const [products, setProducts] = useState([new Product()]);
    const removeItem = (index) => {
        setProducts(prevState => [...prevState.slice(0, index), ...prevState.slice(index + 1)])
    }
    const addProduct = () => {
        setProducts([...products, new Product()]);
        console.log(products)
    }
    const dynamicKey = () => useId();

    return (
        <StyledProductList>
            {products.map((product, index) => <ProductItem 
                key={index.toString()} 
                product={product} 
                index={index} 
                remove={() => removeItem(index)}
            />)}
            <ButtonPlus action={addProduct}>Добавить товар</ButtonPlus>
        </StyledProductList>
    )
}

export { ProductList }
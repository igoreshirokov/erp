'use client'
const { default: styled } = require("styled-components");

const Label = styled.label`

`;
const Input = styled.input`
    padding: 10px 20px;
    font-size: 20px;
`;

const Textarea = styled.textarea`
    padding: 10px 20px;
    font-size: 20px;
`


const InputDate = styled.input`
    padding: 10px 20px;
    font-size: 20px;
`

const Select = styled.select``

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

const StyledFormRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`

const StyledFormCol = styled.div`
    display: flex;
    flex-direction: column;
`

export { 
    Form,
    Input,
    Label,
    InputDate,
    Select,
    StyledFormRow,
    StyledFormCol,
    Textarea, 
};
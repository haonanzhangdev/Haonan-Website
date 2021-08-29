import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
`;

const Input = styled.input`
`;



const Forms = () => (
    <>
    <Label>
        Your Email:
    </Label>
    <Input type="email" id="email" name="email" placeholder="Your email address .."/>

    <Label>Message: </Label>
    <textarea id="subject" name="subject" placeholder="Write something.." styles="height:200px"/>
    
    </>
)
export default Forms;

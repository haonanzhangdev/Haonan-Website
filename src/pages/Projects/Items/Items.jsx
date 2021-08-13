import React from 'react';
import styled from 'styled-components';
import VE from '../../../assets/img/VE_HP.jpg';

const Cells = styled.div`
    position: relative;
`;

const Post = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid hsla(0,0%,62.7%,.3);
    margin: 0 0 2em;
`;

const PostHeader = styled.div`
    z-index: 2;
    padding: 1.25em 4.25em .1em 1.25em;
    min-height: 4em;
    position: relative;
    flex-grow: 1;
`;

const H3 = styled.h3`
    font-size: .9em;
    color: #3c3b3b;
    font-family: "Raleway",Helvetica,sans-serif;
    font-weight: 800;
    letter-spacing: .25em;
    line-height: 1.65;
    margin: 0 0 1em;
    text-transform: uppercase;
`;

const P = styled.p`
    font-size: .7em;
    color: #4b4a4a;
    font-family: "Raleway",Helvetica,sans-serif;
    font-weight: 600;
    letter-spacing: .25em;
    line-height: 1.65;
    margin: 0 0 1em;
    text-transform: uppercase;
`;

const Href = styled.a`
    overflow: hidden;
    width: 100%;
    transition: color .2s ease,border-bottom-color .2s ease;
    border-bottom: 1px dotted hsla(0,0%,62.7%,.65);
    color: inherit;
    text-decoration: none;
    :hover{
        color: #2e59ba!important;
    }
`;

const IMG = styled.img`
    transition: transform .2s ease-out;
    width: 100%;
    display: block;
`;

const DES = styled.div`
    /* position: absolute; */
    padding: 0;
    bottom: 0;
    /* border-top: 1px solid hsla(0,0%,62.7%,.3); */
`;

const DesP = styled.p`
    font-size: .9rem;
    margin: 0;
    padding: 1.25em;
    background-color: hsla(0,0%,75%,.1);
    color: #3c3b3b;
    font-family: "Raleway",Helvetica,sans-serif;
    /* z-index: 1000; */
    transition: all .1s;
    -webkit-transition: all .1s ease-in-out;
`;

const Items = () => (
    <Cells>
        <Post>
            <PostHeader>
                <H3>Value Eats</H3>
                <P>MAY 2021 - AUGUST 2021</P>
            </PostHeader>
            <Href href='https://github.com/conanzahn/ValueEatsWebsite9900.git'>
                <IMG src={VE}/>
            </Href>
            <DES>
                <DesP>Value eats is a discount voucher website, 
                    build for diners and eateries. Diners can search, navigate, 
                    book and manager vouchers; Eateries can distribute, manage voucher 
                    for their restaurant.</DesP>
            </DES>
        </Post>
    </Cells>
)
export default Items;

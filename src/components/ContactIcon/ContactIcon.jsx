import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/contact';

const Listicon = styled.ul`
    color: #aaa;
    list-style: none;
    margin-bottom: 2em;
    display:flex;
`;

const Icons = styled.li`
    padding-right: 1em;
    text-decoration: none;
`;

const Herf = styled.a`
    color: inherit;
`;

const ContactIcon = () => (
    <Listicon>
    {data.map((s) => (
        <Icons>
            <li key={s.label}>
                <Herf href={s.link} >
                    <FontAwesomeIcon icon={s.icon} />
                </Herf>
            </li>
        </Icons>
    ))}
    </Listicon>
)
export default ContactIcon;
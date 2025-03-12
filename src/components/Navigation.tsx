"use client";

import styled from "styled-components";
import NavLink from "@/components/NavLink";
import HamburguerMenu from "@/components/HamburguerMenu";
import { useState } from "react";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {
        display: none;
    }

`;

export default function Navigation() {
    return (
        <Nav>
            <NavLink href="/" label="Home" />
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
        </Nav>
    )



}


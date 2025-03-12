import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledLink = styled(Link)<{ $isActive: boolean }>`
    position: relative;
    padding: 8px 12px;
    text-decoration: none;
    color: ${({ $active }) => ($active ? "#3b82f6" : "#000")};
    font-weight: ${({ $active }) => ($active ? "bold" : "normal")};

    &:hover {
        color: #3b82f6;
    }
    
    &::after {
    content: "";
    }



`;
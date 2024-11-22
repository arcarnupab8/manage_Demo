import React from 'react'
import { useNavigate } from 'react-router-dom';

import style from './css/navitem.module.css';

interface NavItemProps {
    text: string;
    icon: React.FC;
    hoverIcon: React.FC;
    navigatelink: string;
    isActive: boolean;
    isHovered: boolean;
    onHover: (hover: boolean) => void;
}

const NavItem: React.FC<NavItemProps> = ({ text, icon: Icon, hoverIcon: HoverIcon, navigatelink, isActive, isHovered, onHover }) => {
    const navigate = useNavigate();

    return (
        <li
            className={`${isActive ? style.active : ''}`}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            onClick={() => navigate(navigatelink)}
        >
            {isHovered || isActive ? <HoverIcon /> : <Icon />}
            {text}
        </li>
    );
}

export default NavItem
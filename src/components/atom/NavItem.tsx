import React from 'react'
import { useNavigate } from 'react-router-dom';

import style from './css/navitem.module.css';

interface NavItemProps {
    text: string;
    icon: JSX.Element;
    navigatelink: string;
    isActive: boolean;
    onHover: (hover: boolean) => void;

}

const NavItem: React.FC<NavItemProps> = ({ text, icon, navigatelink, isActive, onHover }) => {
    const navigate = useNavigate();

    return (
        <li
            className={`${isActive ? style.active : ''}`}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            onClick={() => navigate(navigatelink)}
        >
            {icon}
            {text}
        </li>
    );
}

export default NavItem
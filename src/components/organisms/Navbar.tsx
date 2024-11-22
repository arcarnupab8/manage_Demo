import React, { useState } from 'react'
 
import style from './css/navbar.module.css';
import { useNavigate } from 'react-router-dom';
import bankIcon from '../atom/icon/bankIcon';
import wallteHandleIcon from '../atom/icon/walletHandleIcon';
import walletIcon from '../atom/icon/walletIcon';
import bankHandleIcon from '../atom/icon/bankHandleIcon';
import billIcon from '../atom/icon/billIcon';
import billHandleIcon from '../atom/icon/billHandleIcon';
import stockIcon from '../atom/icon/stockIcon';
import stockHandleIcon from '../atom/icon/stockHandleIcon';
import loggerIcon from '../atom/icon/loggerIcon';
import loggerHandleIcon from '../atom/icon/loggerHandleIcon';
import OptionIcon from '../atom/icon/optionIcon';

const Navbar: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const navigate = useNavigate();

    const navItems = [
        { text: 'รายรับ/รายจ่าย', icon: walletIcon, hoverIcon: wallteHandleIcon, navigatelink: '/' },
        { text: 'กู้ยืม', icon: bankIcon, hoverIcon: bankHandleIcon, navigatelink: '/borrow' },
        { text: 'ออกบิล', icon: billIcon, hoverIcon: billHandleIcon, navigatelink: '/bills' },
        { text: 'สต็อก', icon: stockIcon, hoverIcon: stockHandleIcon, navigatelink: '/stock' },
        { text: 'บันทึกเวลา', icon: loggerIcon, hoverIcon: loggerHandleIcon, navigatelink: '/times' },
    ];
  return (
    <nav>
        <ul className={style.navList}>
            {navItems.map((item, index) => (
                <React.Fragment key={index}>
                    <li
                        className={`${window.location.pathname === item.navigatelink ? style.active : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => navigate(item.navigatelink)}
                    >
                        {hoveredIndex === index || window.location.pathname === item.navigatelink
                            ? <item.hoverIcon />
                            : <item.icon />
                        }
                        {item.text}
                    </li>
                    <div className={style.divider}></div>

                    </React.Fragment>
                ))
            }

        </ul>

        <div className={style.option}>
            <OptionIcon/>
        </div>
    </nav>
  )
}

export default Navbar
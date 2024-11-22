import React, { useContext, useState } from 'react'
 
import style from './css/navbar.module.css';
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
import OptionHandleIcon from '../atom/icon/optionHandleIcon';
import HamburgerIcon from '../atom/icon/hamburgerIcon';
import NavItem from '../atom/NavItem';
import { WindowSizeContext } from '../context/WindowSizeContext';

const Navbar: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const context = useContext(WindowSizeContext);

    if (!context) {
        throw new Error('WindowSizeContext is not provided');
    }
    const { width } = context;
    
    const navItems = [
        { text: 'รายรับ/รายจ่าย', icon: walletIcon, hoverIcon: wallteHandleIcon, navigatelink: '/' },
        { text: 'กู้ยืม', icon: bankIcon, hoverIcon: bankHandleIcon, navigatelink: '/borrow' },
        { text: 'ออกบิล', icon: billIcon, hoverIcon: billHandleIcon, navigatelink: '/bills' },
        { text: 'สต็อก', icon: stockIcon, hoverIcon: stockHandleIcon, navigatelink: '/stock' },
        { text: 'บันทึกเวลา', icon: loggerIcon, hoverIcon: loggerHandleIcon, navigatelink: '/times' },
    ];

    const pathname = window.location.pathname;
  return (
    <nav>
        {width > 739 ? (
            <div className={style.navBar}>
                <ul className={style.navList}>
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <NavItem
                                text={item.text}
                                icon={item.icon}
                                hoverIcon={item.hoverIcon}
                                navigatelink={item.navigatelink}
                                isActive={window.location.pathname === item.navigatelink}
                                isHovered={hoveredIndex === index}
                                onHover={(hover) => setHoveredIndex(hover ? index : null)}
                            />
                            <div className={style.divider}></div>
                            </React.Fragment>
                        ))
                    }
                </ul>
                
                <div className={style.option}>
                    <OptionIcon/>
                </div>
            </div>
            
        ) : (
            <div className={style.navMobile}>
                <div>
                    <HamburgerIcon/>
                </div>

                <div className={style["navItem-Wrap"]}>
                    {navItems.map((item, index) => {
                            if (pathname === item.navigatelink) {
                                return (
                                    <NavItem
                                        key={index}
                                        text={item.text}
                                        icon={item.icon}
                                        hoverIcon={item.hoverIcon}
                                        navigatelink={item.navigatelink}
                                        isActive={pathname === item.navigatelink}
                                        isHovered={hoveredIndex === index}
                                        onHover={(hover) => setHoveredIndex(hover ? index : null)}
                                    />
                                );
                            }
                            return null;
                        })
                    }
                </div>

                <div>
                    <OptionHandleIcon/>
                </div>
            </div>
        )}

    </nav>
  )
}

export default Navbar
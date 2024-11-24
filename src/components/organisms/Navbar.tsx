import React, { useContext, useState } from 'react'
 
import style from './css/navbar.module.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { WindowSizeContext } from '../context/WindowSizeContext';
import NavItem from '../atom/NavItem';

const Navbar: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const context = useContext(WindowSizeContext);

    if (!context) {
        throw new Error('WindowSizeContext is not provided');
    }
    const { width } = context;
    
    const navItems = [
        { text: 'รายรับ/รายจ่าย', icon: <AccountBalanceWalletIcon/>, navigatelink: '/' },
        { text: 'กู้ยืม', icon: <AccountBalanceIcon/>, navigatelink: '/borrow' },
        { text: 'ออกบิล', icon: <ReceiptLongIcon/>, navigatelink: '/bills' },
        { text: 'สต็อก', icon: <WidgetsIcon/>, navigatelink: '/stock' },
        { text: 'บันทึกเวลา', icon: <AssignmentIndIcon/>, navigatelink: '/times' },
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
                                navigatelink={item.navigatelink}
                                isActive={window.location.pathname === item.navigatelink}
                                onHover={(hover: boolean) => setHoveredIndex(hover ? index : null)}
                            />
                            <div className={style.divider}></div>
                            </React.Fragment>
                        ))
                    }
                </ul>
                
                <div className={style.option}>
                    <MoreVertIcon/>
                </div>
            </div>
            
        ) : (
            <div className={style.navMobile}>
                <div>
                    <MenuIcon
                        sx={{
                            color: 'white',
                        }}
                    />
                </div>

                <div className={style["navItem-Wrap"]}>
                    {navItems.map((item, index) => {
                            if (pathname === item.navigatelink) {
                                return (
                                    <NavItem
                                        key={index}
                                        text={item.text}
                                        icon={item.icon}
                                        navigatelink={item.navigatelink}
                                        isActive={pathname === item.navigatelink}
                                        onHover={(hover: boolean) => setHoveredIndex(hover ? index : null)}
                                    />
                                );
                            }
                            return null;
                        })
                    }
                </div>

                <div>
                    <MoreVertIcon
                        sx={{
                            color: 'white',
                        }}
                    />
                </div>
            </div>
        )}

    </nav>
  )
}

export default Navbar
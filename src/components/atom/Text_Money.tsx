import React from 'react'

import style from './css/textmoney.module.css';
import { TextMoneyPropS } from '../../Typeof/DataMoney';

const Text_Money: React.FC<TextMoneyPropS> = (Props) => {
  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
  };

  return (
    <div className={style.TotalBox}>
      <p>Day: {Props.Day}</p>
      <p>+{formatMoney(Props.Money)} ฿</p>
    </div>
  )
}

export default Text_Money
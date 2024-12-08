import React from 'react'
import AccordionDetails from '@mui/material/AccordionDetails';

import style from './css/transactiondetail.module.css';
import { DailyMoney } from '../../Typeof/DataMoney';

const TransactionDetail: React.FC<DailyMoney> = (Props) => {

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
  };

  return (
    <AccordionDetails
      sx={{
        padding: "0"
      }}
    >
      {Props.outcomes?.map(item => (
        <div className={style.outComeBox}>
          <div className={style.title}>
            <p>{item.name}</p>
            <p>- {formatMoney(item.money)}</p>
          </div>

          <div className={style.detial}>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </AccordionDetails>
  )
}

export default TransactionDetail
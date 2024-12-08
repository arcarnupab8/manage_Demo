import React from 'react'
import Accordion from '@mui/material/Accordion';

import style from './css/dailytotallist.module.css';
import DailyTotal from './DailyTotal';
import TransactionDetail from './TransactionDetail';
import { DailyMoney } from '../../Typeof/DataMoney';

interface DailyTotalListProps {
  value: DailyMoney;
}

const DailyTotalList: React.FC<DailyTotalListProps> = (Props) => {

  const day = new Date(Props.value.at).getDate();

  return (
    <Accordion
      sx={{
        width: "350px"
      }}
    >
      <DailyTotal
        Day={day}
        Money={Props.value.income}
      />
      <TransactionDetail
        income={Props.value.income}
        at={Props.value.at}
        outcomes={Props.value.outcomes}
      />
    </Accordion>
  )
}

export default DailyTotalList
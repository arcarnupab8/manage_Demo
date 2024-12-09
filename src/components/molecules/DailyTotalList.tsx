import React from 'react'
import Accordion from '@mui/material/Accordion';

import style from './css/dailytotallist.module.css';
import DailyTotal from './DailyTotal';
import TransactionDetail from './TransactionDetail';
import { DailyMoney } from '../../Typeof/DataMoney';
import { data } from 'react-router-dom';

/* Style */

const AccordionBox: React.CSSProperties = {
  width: "350px"
}

/* Style */

interface DailyTotalListProps {
  data: DailyMoney[];
}

const DailyTotalList: React.FC<DailyTotalListProps> = ({ data }) => {

  const totalMoney = data.reduce((sum, item) => {
    return item.Income ? sum + item.money : sum - item.money;
  }, 0);
  const dateNumber = data[0]?.at.getDate();

  return (
    <Accordion
      sx={AccordionBox}
    >
      <DailyTotal Day={dateNumber} Money={totalMoney} />
      {data.map((transaction, index) => (
        <TransactionDetail
          key={index}
          name={transaction.name}
          money={transaction.money}
          description={transaction.description}
          at={transaction.at}
          Income={transaction.Income}
        />
      ))}
    </Accordion>
  )
}

export default DailyTotalList
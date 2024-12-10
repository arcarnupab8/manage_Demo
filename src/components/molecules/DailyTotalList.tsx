import React from 'react'
import Accordion from '@mui/material/Accordion';

import DailyTotal from './DailyTotal';
import TransactionDetail from './TransactionDetail';
import { DailyMoney } from '../../Typeof/DataMoney';

/* Style */

const AccordionBox: React.CSSProperties = {
  width: "350px"
}

/* Style */

interface DailyTotalListProps {
  value: DailyMoney;
}

const DailyTotalList: React.FC<DailyTotalListProps> = (Props) => {
  const { transactions, at } = Props.value;

  const totalMoney = transactions.reduce((sum, transaction) => {
    return transaction.Income ? sum + transaction.money : sum - transaction.money;
  }, 0);
  const dateNumber = at.getDate();

  return (
    <Accordion
      sx={AccordionBox}
    >
      <DailyTotal Day={dateNumber} Money={totalMoney} />

      {transactions.map((transaction, index) => (
        <TransactionDetail
          key={index}
          name={transaction.name}
          money={transaction.money}
          description={transaction.description}
          Income={transaction.Income}
        />
      ))}
    </Accordion>
  )
}

export default DailyTotalList
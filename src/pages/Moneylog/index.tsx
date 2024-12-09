import React from 'react'

import style from './css/moneylog.module.css'
import DailyTotalList from '../../components/molecules/DailyTotalList'
import { DailyMoney, DailyMoneyList } from '../../Typeof/DataMoney'

const Moneylog: React.FC = () => {

  const groupedData = Object.values(
    DailyMoneyList.reduce((acc, item) => {
      const dateKey = item.at.toDateString();

      if (!acc[dateKey]) {
        acc[dateKey] = {
          date: item.at,
          totalMoney: 0,
          transactions: [],
        };
      }

      if (item.Income) {
        acc[dateKey].totalMoney += item.money;
      } else {
        acc[dateKey].totalMoney -= item.money;
      }

      acc[dateKey].transactions.push(item);

      return acc;
    }, {} as Record<string, { date: Date; totalMoney: number; transactions: DailyMoney[] }>)
  );

  return (
    <div>
      {groupedData.map((item, index) => (
        <DailyTotalList
          key={index}
          data={item.transactions}
        />
      ))}
    </div>
  )
}

export default Moneylog
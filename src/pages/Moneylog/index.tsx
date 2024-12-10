import React from 'react'

import style from './css/moneylog.module.css'
import DailyTotalList from '../../components/molecules/DailyTotalList'
import { DailyMoneyList } from '../../Typeof/DataMoney'

const Moneylog: React.FC = () => {

  return (
    <div>
      {DailyMoneyList.map(item => (
        <DailyTotalList
          value={item} key={item.at.toISOString()}
        />
      ))}
    </div>
  )
}

export default Moneylog
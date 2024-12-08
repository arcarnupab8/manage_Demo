import React from 'react'

import style from './css/moneylog.module.css'
import DailyTotalList from '../../components/molecules/DailyTotalList'
import { DailyMoneyList } from '../../Typeof/DataMoney'

const Moneylog: React.FC = () => {

  return (
    <div>
      {DailyMoneyList.map((item) => (
        <DailyTotalList
          value={item}
        />
      ))}
    </div>
  )
}

export default Moneylog
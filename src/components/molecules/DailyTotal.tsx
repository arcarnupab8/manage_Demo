import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Text_Money from '../atom/Text_Money';
import { TextMoneyPropS } from '../../Typeof/DataMoney';

const DailyTotal: React.FC<TextMoneyPropS> = (Props) => {
  return (
    <AccordionSummary
      sx={{
        width: "350px",
        height: "67px",
        background: "#0078D4",
        color: "white"
      }}
      expandIcon={
        <ExpandMoreIcon 
          sx={{
            color: "white",
          }}
        />
      }
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Text_Money
        Day={Props.Day}
        Money={Props.Money}
      />
    </AccordionSummary>
  )
}

export default DailyTotal
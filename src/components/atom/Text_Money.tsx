import React from 'react'

const Box: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
}

const textp: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 600,
  margin: 0,
  padding: 0,
}

export interface TextMoneyPropS {
  Day: number,
  Money: number
}

const Text_Money: React.FC<TextMoneyPropS> = (Props) => {
  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
  };

  return (
    <div style={Box}>
      <p style={textp}>Day: {Props.Day}</p>
      {Props.Money > 0 ? (
        <p style={textp}>+{formatMoney(Props.Money)} ฿</p>
      ):(
        <p style={textp}>{formatMoney(Props.Money)} ฿</p>
      )}
    </div>
  )
}

export default Text_Money
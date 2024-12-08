interface moneyPerMonth {
    income: GLfloat;
    expenses: GLfloat;
    month: Date;
}

export const moneyPerMonthData: moneyPerMonth[] = [
    {
        income: 30000,
        expenses: 25000,
        month: new Date(2024, 7, 1),
    },
    {
        income: 32000,
        expenses: 27000,
        month: new Date(2024, 8, 1),
    },
    {
        income: 31000,
        expenses: 26000,
        month: new Date(2024, 9, 1),
    },
];

export interface Outcome {
    money: number;
    name: string;
    description: string;
}

export interface DailyMoney {
    income: number;
    at: Date;
    outcomes: Outcome[]|null;
}

export const DailyMoneyList: DailyMoney[] = [
    {
        income: 300.50,
        at: new Date(2024, 7, 3),
        outcomes: [
            {
                money: 900,
                name: "Hobby",
                description: "Buy hobby toy."
            },
            {
                money: 200.50,
                name: "Eating",
                description: "Buy drinks and dinner."
            }
        ]
    },
    {
        income: 400.00,
        at: new Date(2024, 8, 12),
        outcomes: [
            {
                money: 200.00,
                name: "Eating",
                description: "Buy drinks and dinner."
            }
        ]
    },
    {
        income: 1000000.25,
        at: new Date(2024, 9, 17),
        outcomes: [
            {
                money: 9000.00,
                name: "Eating",
                description: "Buy drinks and dinner."
            }
        ]
    }
];

export interface TextMoneyPropS {
    Day: number,
    Money: number
}
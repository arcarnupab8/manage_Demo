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

export interface DailyMoney {
    money: number;
    at: Date;
    Income: boolean;
    name: string|null;
    description: string|null;
}

export const DailyMoneyList: DailyMoney[] = [
    {
        money: 200.50,
        at: new Date(2024, 7, 3),
        Income: true,
        name: "Part time",
        description: null,
    },
    {
        money: 100.00,
        at: new Date(2024, 7, 3),
        Income: false,
        name: "Eating",
        description: "Buying drinks and food dinner.",
    },
    {
        money: 125.75,
        at: new Date(2024, 7, 3),
        Income: false,
        name: "Hobby",
        description: "Buying toys.",
    },
    {
        money: 400.00,
        at: new Date(2024, 8, 2),
        Income: true,
        name: "Part time",
        description: null,
    },
    {
        money: 150.00,
        at: new Date(2024, 8, 2),
        Income: false,
        name: "Eating",
        description: "Buying drinks and food dinner.",
    },
    {
        money: 10000.50,
        at: new Date(2024, 10, 1),
        Income: true,
        name: "Income month",
        description: null,
    }
];
interface moneyPerMonth {
    income: GLfloat;
    expenses: GLfloat;
    month: Date;
}

interface moneyPerDay {
    income: GLfloat;
    date: Date;
}

interface expensesPerDay{
    expenses: GLfloat;
    date: Date;
    name: string;
    details: string;
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

export const moneyPerDayData: moneyPerDay[] = [
    { income: 1000, date: new Date(2024, 7, 5) },
    { income: 1500, date: new Date(2024, 7, 15) },
    { income: 1200, date: new Date(2024, 8, 5) },
    { income: 1700, date: new Date(2024, 8, 15) },
    { income: 2200, date: new Date(2024, 8, 25) },
    { income: 1100, date: new Date(2024, 9, 5) },
    { income: 1600, date: new Date(2024, 9, 15) },
    { income: 2100, date: new Date(2024, 9, 25) },
];

export const expensesPerDayData: expensesPerDay[] = [
    { expenses: 250.50, date: new Date(2024, 7, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 100.00, date: new Date(2024, 7, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 0.50, date: new Date(2024, 7, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },

    { expenses: 250.50, date: new Date(2024, 7, 15), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 1000.00, date: new Date(2024, 7, 15), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },

    { expenses: 250.50, date: new Date(2024, 8, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 100.00, date: new Date(2024, 8, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 0.50, date: new Date(2024, 8, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 500, date: new Date(2024, 8, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },

    { expenses: 250.50, date: new Date(2024, 8, 15), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 1000.00, date: new Date(2024, 8, 15), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },

    { expenses: 500.50, date: new Date(2024, 8, 25), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 0, date: new Date(2024, 8, 25), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },

    { expenses: 250.50, date: new Date(2024, 9, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 100.00, date: new Date(2024, 9, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 0.50, date: new Date(2024, 9, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 500, date: new Date(2024, 9, 5), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },

    { expenses: 250.50, date: new Date(2024, 9, 15), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 1000.00, date: new Date(2024, 9, 15), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },

    { expenses: 500.50, date: new Date(2024, 9, 25), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
    { expenses: 0, date: new Date(2024, 9, 25), name: "ซื้อของเซเว่น", details: 'น้ำ ขนม ชานม ข้าวได่ทอด' },
];
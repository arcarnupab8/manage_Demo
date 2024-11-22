import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface WindowSizeContextType {
    width: number;
    height: number;
}

const WindowSizeContext = createContext<WindowSizeContextType | undefined>(undefined);

const WindowSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <WindowSizeContext.Provider value={{ width, height }}>
            {children}
        </WindowSizeContext.Provider>
    );
};

export { WindowSizeProvider, WindowSizeContext };

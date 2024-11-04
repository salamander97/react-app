import React, { createContext, useContext, useState } from 'react';

// Tạo context
export const ThemeContext = createContext();

// Custom hook để sử dụng theme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
        // Thêm hoặc xóa class dark khỏi body element
        document.body.classList.toggle('dark');
    };

    // Value object chứa state và functions
    const value = {
        isDark,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
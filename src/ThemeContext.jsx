import React, { createContext, useState, useContext } from 'react';
import tailwindConfig from '../tailwind.config.cjs'; // Adjust the path as necessary

const ThemeContext = createContext();

// Define your themes with both hex codes and Tailwind class names
const themes = [
  { name: 'Angry Orange', hex: `[${tailwindConfig.theme.extend.colors.orange}]`,bg: `${tailwindConfig.theme.extend.colors.orange}` },
  { name: 'Electric Blue', hex: `[${tailwindConfig.theme.extend.colors.electricBlue}]`,bg: `${tailwindConfig.theme.extend.colors.electricBlue}` },
  { name: 'Wild Red', hex: `[${tailwindConfig.theme.extend.colors.wildRed}]`, bg: `${tailwindConfig.theme.extend.colors.wildRed}` },
  { name: 'Neon Green', hex: `[${tailwindConfig.theme.extend.colors.wildRed}]`, bg: `${tailwindConfig.theme.extend.colors.neonGreen}` },
  { name: 'Lizz Purple', hex: `[${tailwindConfig.theme.extend.colors.lizzPurple}]`, bg: `${tailwindConfig.theme.extend.colors.lizzPurple}` },
];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes[0].bg);

  const setSpecificTheme = (themeName) => {
    const selectedTheme = themes.find(theme => theme.name === themeName);
    if (selectedTheme) {
      setTheme(selectedTheme.bg);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setSpecificTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
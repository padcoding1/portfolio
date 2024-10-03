import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setSpecificTheme, themes } = useTheme();

  console.log("Themes: ", themes);

  return (
    <div className="flex space-x-2">
      {themes.map(({ name, hex, bg }) => {
        console.log("Name: ", name, "Hex: ", hex, "BG: ", bg);
        return (
          <button
            key={name}
            onClick={() => setSpecificTheme(name)}
            className={`w-[8px] h-[8px] rounded-full ${theme === name ? `ring-2 ring-offset-2 ring-${name}` : ''}`}
            style={{ backgroundColor: bg }} // Inline style for background color
          />
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
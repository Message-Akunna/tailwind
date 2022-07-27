import * as React from 'react';
import { Theme, ThemeContextType } from '@/types/theme';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPreference = window.localStorage.getItem('current-theme');
    if (typeof storedPreference === 'string') {
      return storedPreference;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<React.ReactNode> = ({
  initialTheme,
  children,
}) => {
  const [themeMode, setThemeMode] = React.useState<Theme>(getInitialTheme);

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(existing);

    localStorage.setItem('current-theme', existing);
  };

  if (initialTheme) {
    checkTheme(initialTheme);
  }

  React.useEffect(() => {
    checkTheme(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ theme: themeMode, setTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

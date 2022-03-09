import { useLayoutEffect, useState } from 'react';

import Theme from '@/constants/theme';

const isDarkTheme = window?.matchMedia(`(prefers-color-scheme: ${Theme.LIGHT})`).matches;
const defaultTheme = isDarkTheme ? Theme.DARK : Theme.LIGHT;

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme);
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const onToggle = () => {
    if (theme === Theme.DARK) setTheme(Theme.LIGHT);
    else {
      setTheme(Theme.DARK);
    }
  };
  return { theme, onToggle };
};

export default useTheme;

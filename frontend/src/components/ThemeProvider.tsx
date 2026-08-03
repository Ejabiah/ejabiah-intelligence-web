import type { PropsWithChildren } from 'react';
import { FluentProvider } from '@fluentui/react-components';
import { ThemeContext } from '../contexts/ThemeContext';
import { useThemeProvider } from '../hooks/useThemeProvider';
import { ejabiahTheme } from '../theme/ejabiahTheme';

export function ThemeProvider({ children }: PropsWithChildren) {
  const themeContext = useThemeProvider();

  return (
    <ThemeContext.Provider value={themeContext}>
      <FluentProvider theme={ejabiahTheme}>
        {children}
      </FluentProvider>
    </ThemeContext.Provider>
  );
}
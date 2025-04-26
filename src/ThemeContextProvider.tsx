import { createContext, useState, FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME, Theme } from "@admiral-ds/react-ui";

export type ContextProps = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

export const ThemeContext = createContext<ContextProps>({} as ContextProps);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

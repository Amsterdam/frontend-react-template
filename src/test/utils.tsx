import { createMemoryHistory } from "history";
import { ThemeProvider } from "@amsterdam/asc-ui";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { ReactNode } from "react";

export const history = createMemoryHistory();

export const withTheme = (Component: ReactNode) => {
  return (
    <ThemeProvider>
      <Router history={history}>{Component}</Router>
    </ThemeProvider>
  );
};

import { createMemoryHistory } from "history";
import { ThemeProvider } from "@amsterdam/asc-ui";
import { unstable_HistoryRouter as Router } from "react-router-dom"

export const history = createMemoryHistory();

export const withTheme = (Component) => {
  return (
    <ThemeProvider>
      <Router history={history}>{Component}</Router>
    </ThemeProvider>
  );
};

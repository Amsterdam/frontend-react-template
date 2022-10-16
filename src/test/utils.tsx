import { createMemoryHistory } from "history";
import { ThemeProvider } from "@amsterdam/asc-ui";
import CustomRouter from "./CustomRouter";
import { ReactNode } from "react";

export const history = createMemoryHistory();

export const withTheme = (Component: ReactNode) => {
  return (
    <ThemeProvider>
      <CustomRouter history={history}>{Component}</CustomRouter>
    </ThemeProvider>
  );
};

import { Fragment } from "react";
import NextUIProviderWrapper from "./provider/NextUIProviderWrapper";
import { ThemeProvider } from "./provider/ThemeProvider";
import { ToggleButtonProvider } from "../contexts/ToggleButton";

const AppMainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToggleButtonProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NextUIProviderWrapper>
          <Fragment>{children}</Fragment>
        </NextUIProviderWrapper>
      </ThemeProvider>
    </ToggleButtonProvider>
  );
};

export default AppMainProvider;

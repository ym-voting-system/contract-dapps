/**
 * * React Utils
 */
import { Routes, Route } from "react-router-dom";

/**
 * * Wallet && Blockchain interaction */
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

/**
 * * Mantine UI Library
 */
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

/**
 * *Layout */
import Layout from "@layout/default";

/**
 * *Pages */
import Home from "@pages/Home";
import VoterManagment from "@pages/VoterManagment";
import SessionManagement from "@pages/SessionManagement";
import ProposalsPage from "@pages/Proposals";

function App() {
  /*Theme Mode Management*/
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Layout />}>
              <Route path="/accounts/*" element={<VoterManagment />} />
              <Route
                path="/accounts/workflow"
                element={<SessionManagement />}
              />
              <Route path="/accounts/proposals" element={<ProposalsPage />} />
            </Route>
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;

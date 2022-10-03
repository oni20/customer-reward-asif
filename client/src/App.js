import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Import custom components
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import CustomerInfo from "./components/CustomerInfo/CustomerInfo";
import Footer from "./components/Footer/Footer";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        <Layout>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Customer Reward points calculation
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Show reward points for each customer based on their purchases on last months
          </Typography>

          <CustomerInfo />
        </Layout>
      </main>

      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;

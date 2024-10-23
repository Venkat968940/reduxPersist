import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./components/Routes/Routes";
import { ThemeSetup } from "./components/Theme/Theme";
import { CustomizedSnackbar } from "./components/Utils/CustomSnackbar";

function App() {
  
  return (
    <HelmetProvider>
      <ThemeSetup>
        <CustomizedSnackbar />
        <BrowserRouter><AppRoutes /></BrowserRouter>
      </ThemeSetup>
    </HelmetProvider>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import CustomNavbar from "../src/components/Navbar";
import AppRouter from "./routes/Router";

export default function App() {
  return (
    <Router>
      <CustomNavbar />
      <AppRouter />
    </Router>
  );
}

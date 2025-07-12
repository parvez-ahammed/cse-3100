import { BrowserRouter } from "react-router-dom";
import Navigation_Bar from "./components/Navigation_Bar";
import AppRoutes from "./Router";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation_Bar />
      <AppRoutes />
    </BrowserRouter>
  );
}

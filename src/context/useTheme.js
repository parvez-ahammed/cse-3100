import { useContext } from "react";
import ThemeContext from "./ThemeContextValue.js";

const useTheme = () => useContext(ThemeContext);

export default useTheme;

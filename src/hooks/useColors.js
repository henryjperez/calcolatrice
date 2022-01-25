import { useContext } from "react";
import context from "../context";
import { darkModeColors, lightModeColors, } from "../utils/constants";

function useColors() {
	const { darkMode } = useContext(context);
	return darkMode? darkModeColors : lightModeColors;
}

export default useColors;
import { useReducer } from "react";
import Context from "./index";
import initState from "./state";

function reducer(state, action) {
	switch (action.type) {
		case "darkmode":
			console.log("darkmode", state);
			return { ...state, darkMode: !state.darkMode };
		case "login":
			console.log("login", action.payload);
			return { ...state, isSignIn: true, ...action.payload };
		case "logout":
			return { ...state, isSignIn: false, username: "" };
		default:
			return state;
	}

}

const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<Context.Provider value={{...state, dispatch }}>
			{ children }
		</Context.Provider>
	);
};

export default ContextProvider;
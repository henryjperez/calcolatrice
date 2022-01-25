import { useContext } from "react";
import { Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import context from "../context";
import { hostServer } from "../utils/constants";

function useFetchAuth() {
	const { isSignIn, dispatch } = useContext(context);
	// const navigation = useNavigation();

	async function fetcher(route, username, password) {
		try {
			/* const body = JSON.stringify({
				
			}); */
			const value = await fetch(hostServer + route, {
				method: "POST",
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username,
					password,
				}),
			})
				.then((response) => response.json())
				.then((json) => {
					return json;
				})
				.catch((error) => {
					console.error(error);
				});
			console.log(route, username, password, value, isSignIn);

			if (route === "/fake-create") {
				if (value.created) {
					dispatch({type: "login", payload: { username }});
					// navigation.navigate()
				} else {
					Alert.alert("Hubo un problema al crear el usuario, por favor inténtelo más tarde.");
				}
			} else if (route === "/fake-get") {
				if (value.login) {
					dispatch({ type: "login", payload: { username } })
				} else {
					Alert.alert("No se pudo encontrar el usuario.");
				}
			}

		} catch (err) {
			console.error(err);
			Alert.alert("Hubo un problema con el servidor, por favor inténtelo más tarde.");
		}
	}

	return fetcher;

}

export default useFetchAuth;
import React, { useState, useEffect, useContext } from "react";
import AuthNavigation from "./AuthNavigation";
import CalculatorNavigation from "./CalculatorNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import context from "../context";


const AppNavigation = () => {
	const [logged, setLogged] = useState(false);
	const { isSignIn } = useContext(context);

	async function getData() {
		try {
			const value = await AsyncStorage.getItem('@isSignIn')
			if (value !== null) {
				setLogged(true);
			}
		} catch (e) {
			console.error(e);
			Alert.alert("Inténtelo más tarde");
		}
	}

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		// if (isSignIn) {
			AsyncStorage.setItem('@isSignIn', isSignIn);
			setLogged(isSignIn);
		// };
	}, [isSignIn]);


	if (logged) {
		return <CalculatorNavigation />
	}
	if (!logged) {
		return <AuthNavigation />
	}
};

export default AppNavigation;
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name={'Login'} component={LoginScreen} />
			<Stack.Screen name={'Registration'} component={RegistrationScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;
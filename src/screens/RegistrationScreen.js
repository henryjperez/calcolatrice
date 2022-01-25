import React, { useContext, useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Title from "../components/atoms/text/Title";
import H2 from "../components/atoms/text/H2";
import DarkMode from "../components/atoms/buttons/DarkMode";
import Buttons from "../components/atoms/buttons";
import context from "../context";
import useFetchAuth from "../hooks/useFetchAuth";
import useColors from "../hooks/useColors";



const LoginScreen = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { dispatch, darkMode } = useContext(context);
	const colors = useColors();
	const fetcher = useFetchAuth();

	function handleSubmit() {
		fetcher("/fake-create", username, password);
	}

	return (
		<View style={{ backgroundColor: colors.main, position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}>
			<SafeAreaView>
				<View style={{ alignItems: "center" }}>
					<Title>
						Registration
					</Title>
					<View style={{marginTop: 30, justifyContent: "center", alignItems: "center"}}>
						<H2>
							Username:
						</H2>
						<TextInput style={{ ...styles.formInput, backgroundColor: colors.third, color: colors.fonts }} onChangeText={setUsername} />
					</View>
					<View style={{ marginTop: 30, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
						<H2>
							Password:
						</H2>
						<TextInput secureTextEntry style={{ ...styles.formInput, backgroundColor: colors.third, color: colors.fonts}} onChangeText={setPassword} />
					</View>
					<Buttons onPress={handleSubmit} style={{ width: 200 }}>
						Register
					</Buttons>
				</View>
				<View style={{ marginTop: 40, alignItems: "center" }}>
					<Text style={{ color: colors.fonts }}>
						Already have an account?
					</Text>
					<Buttons onPress={() => { props.navigation.navigate('Login') }} style={{ width: 200 }}>
						Login
					</Buttons>
				</View>
				<View style={{ alignItems: "center", marginTop: 20 }}>
					<DarkMode />
				</View>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	formInput: {
		padding: 10,
		borderRadius: 5,
		width: 250
	}
})

export default LoginScreen;
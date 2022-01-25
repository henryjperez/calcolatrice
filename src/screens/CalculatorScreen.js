import React, { useContext, useState, useEffect } from "react";
import { Text, View, Button, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";

import Title from "../components/atoms/text/Title";
import ScreenCalculator from "../components/ScreenCalculator";
import Keyboard from "../components/Keyboard";
import Buttons from "../components/atoms/buttons";
import DarkMode from "../components/atoms/buttons/DarkMode";

import useColors from "../hooks/useColors";
import context from "../context";
import H2 from "../components/atoms/text/H2";

const CalculatorScreen = () => {
	const [total, setTotal] = useState(0);
	const [operation, setOperation] = useState([""]);
	const { darkMode, dispatch, username } = useContext(context);
	const colors = useColors();
	
	function handleOperations(key) {
		if(key === "=") {
			parser(true);
			return;
		}
		if (key === "DEL") {
			operation.pop();
			setOperation([...operation]);
			return;
		}
		setOperation([...operation, key]);
	}

	function parser(equal) {
		let value = "";
		let acumulated = 0;

		let data = operation.join("");
		console.log(data);

		operation.forEach(char => {
			console.log(value, acumulated, char);
			if (char !== "+" && char !== "-" && char !== "*" && char !== "/" && char !== "="){
				console.log("asd", char);
				value = value + char.toString();
			} else {
				switch (char) {
					case "+":
						console.log("sum", parseInt(acumulated), parseInt(value));
						acumulated = parseInt(acumulated) + parseInt(value);
						break;
					case "-":
						console.log("subtract");
						acumulated = parseInt(acumulated) - parseInt(value);
						break;
					case "*":
						console.log("multiply");
						acumulated = parseInt(acumulated) * parseInt(value);
						break;
					case "/":
						console.log("divide");
						acumulated = parseInt(acumulated) / parseInt(value);
						break;
					default:
						return;
				}
			}
		});

		if (equal) {
			setOperation(acumulated.toString().split(""));
		}

		setTotal(acumulated);
	}

	return (
		<View style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0, backgroundColor: colors.main, justifyContent: "space-evenly" }}>
			<SafeAreaView>
				<H2 style={{marginTop: -20, marginBottom: 20}}>
					{`Bienvenido, ${username}`}
				</H2>
				<View style={{ flexDirection: "row" }}>
					<Title>
						Calcolatrice
					</Title>
					<View style={{ flexDirection: "row", marginLeft: "auto" }}>
						<DarkMode />
						<Buttons onPress={() => {
							AsyncStorage.setItem('@isSignIn', false);
							dispatch({ type: "logout" });
						}}
							style={{ backgroundColor: colors.fonts, borderRadius: 50, marginLeft: 5, marginRight: 5}}>
							<Icon name="door-open" size={25} color={colors.main} />
						</Buttons>
					</View>
				</View>
				<View style={{ height: "80%",}}>
					<ScreenCalculator value={total} operation={operation} />
					<Keyboard handleOperations={handleOperations} handleEqual={parser} />
				</View>
			</SafeAreaView>
		</View>
	);
};

export default CalculatorScreen;
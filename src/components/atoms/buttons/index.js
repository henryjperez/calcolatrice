import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import useColors from "../../../hooks/useColors";

const Buttons = (props) => {
	const colors = useColors();

	return (
		<TouchableOpacity style={{ ...styles.button, backgroundColor: colors.second, color: colors.main, ...props.style }} onPress={props.onPress}>
			<Text style={{ ...styles.buttonText, color: colors.fonts, ...props.tStyle }}>
				{props.children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonText: {
		fontSize: 25,
		textAlign: "center",
		fontWeight: "bold"
	},
	button: {
		padding: 5,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Buttons;
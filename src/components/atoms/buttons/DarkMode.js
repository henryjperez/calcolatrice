import React, { useContext } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import useColors from "../../../hooks/useColors";
import context from "../../../context";
import Buttons from "./index";
import Icon from "react-native-vector-icons/FontAwesome5";

const DarkMode = (props) => {
	const colors = useColors();
	const { dispatch, darkMode } = useContext(context);

	return (
		<Buttons onPress={() => dispatch({ type: "darkmode" })} style={{ width: 50, borderRadius: 50, backgroundColor: colors.fonts,}} tStyle={{ color: colors.main }}>
						<Icon name={darkMode ? "sun" : "moon"} size={25} color={colors.main} />
					</Buttons>
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

export default DarkMode;
import React from "react";
import { Text, StyleSheet, } from "react-native";
import useColors from "../../../hooks/useColors";

const H2 = (props) => {
	const colors = useColors();

	return (
		<Text
			style={{ ...styles.h1, color: colors.fonts, ...props.style }}>
			{props.children}
		</Text>
	);
};

const styles = StyleSheet.create({
	h1: {
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold"
	}
});

export default H2;
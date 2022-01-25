import React from "react";
import { Text, StyleSheet, } from "react-native";
import useColors from "../../../hooks/useColors";

const Title = (props) => {
	const colors = useColors();

	return <Text
				style={
					{ ...styles.h1, color: colors.fonts,}
			}>
				{props.children}
			</Text>;
};

const styles = StyleSheet.create({
	h1: {
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold"
	}
});

export default Title;
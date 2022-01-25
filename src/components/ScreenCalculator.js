import React from "react";
import { Text, View, StyleSheet, TextInput, } from "react-native";
import useColors from "../hooks/useColors";

const ScreenCalculator = (props) => {
	const colors = useColors();

	return (
		<View style={{ ...styles.screen, backgroundColor: colors.main }}>
			<View style={{ flexDirection: "row"}}>
				{
					props.operation.map((item, index) => {
						return (
							<Text key={item + Math.random()} style={{ color: colors.third }}>{item}</Text>
						);
					})
				}
			</View>
			<Text
				style={{...styles.input, color: colors.fonts }}
				>
				{ props.value }
				</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "right",
	},
	screen: {
		justifyContent: "center",
		textAlign: "center",
		paddingLeft: 10,
		paddingRight: 10,
	}
});

export default ScreenCalculator;
import React from "react";
import { Text, StyleSheet, TouchableOpacity, } from "react-native";
import useColors from "../../../hooks/useColors";

const Key = (props) => {
	const colors = useColors();

	return (
		<TouchableOpacity style={{ ...styles.button, width: props.width || "33%", }} onPress={(e) => {
			props.handlePress(e._dispatchInstances.memoizedProps.children[0].props.children)}}
			>
			<Text style={{ ...styles.key, color: colors.fonts, }} /* onPress={(e) => { props.handlePress(e._dispatchInstances.memoizedProps.children) }} */>
				{props.children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	key: {
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold",
		justifyContent: "center",
		alignItems: "center",
		height: 60,
		maxHeight: 60,
		// backgroundColor: "red",
		width: "100%",
		minWidth: "100%",
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		// width: "33%",
	}
});

export default Key;
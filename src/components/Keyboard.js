import React from "react";
import { Text, StyleSheet, View, FlatList, } from "react-native";
import Key from "./atoms/inputs/Key";
import useColors from "../hooks/useColors";

import Icon from "react-native-vector-icons/Feather";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
const operations = ["+", "-", "*", "/",];
const big = [<Icon name="delete" size={25} color={"white"} />, 0, "="]

const Keyboard = (props) => {
	const colors = useColors();

	return (
		<View style={{ ...styles.mainWrapper, justifyContent: "center", alignItems: "center" }}>
			<View style={{ ...styles.grid, backgroundColor: colors.second, justifyContent: "center", alignItems: "center", paddingTop: 20 }}>
				<FlatList
					data={nums}
					renderItem={num => <Key handlePress={props.handleOperations}>{num.item}</Key>}
					key={(item, index) => item + Math.random() + index}
					numColumns={3}
					style={{ width: "100%", }}
					contentContainerStyle={styles.flatCenter}
					/>
				<FlatList
					data={big}
					renderItem={num => <Key handlePress={props.handleOperations}>{num.item}</Key>}
					key={item => item + Math.random()}
					numColumns={3}
					style={{ width: "100%", marginTop: -60 }}
					contentContainerStyle={styles.flatCenter}
				/>
			</View>
			<View style={{ ...styles.operations, backgroundColor: colors.third, justifyContent: "center", alignItems: "center", paddingTop: 20 }}>
				<FlatList
					data={operations}
					renderItem={num => <Key handlePress={props.handleOperations}>{num.item}</Key>}
					key={item => item + Math.random()}
					numColumns={1}
					style={{width: "100%", padding: 0}}
					contentContainerStyle={styles.flatCenter}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	key: {
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold",
		// height: "70%",
		position: "absolute",
		bottom: 0,

	},
	mainWrapper: {
		flexDirection: "row",
		height: "100%",
		// flex: 3,
	},
	grid: {
		width: "75%",
		backgroundColor: "red",
		height: "100%"
	},
	operations: {
		width: "25%",
		// backgroundColor: "green"
	},
	flatCenter: { justifyContent: "center", alignItems: "center", },
});

export default Keyboard;
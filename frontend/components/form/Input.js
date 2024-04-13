import { useState } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

export default function Input(props) {
	const [val, setVal] = useState("");
	return (
		<View style={styles.view}>
			<Text>{props.title}</Text>
			<TextInput style={styles.input} onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry}/>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		display: "flex",
		flexDirection: "column",
		width: 160,
	},
	text: {},
	input: {
		borderBottomColor: "black",
		borderStyle: "solid",
        borderWidth: 2,
        height: 40,
        paddingHorizontal: 10
	},
});

import {TextInput, StyleSheet, View} from "react-native";

export default function Input(props) {
	return (
		<View style={styles.view}>
			<TextInput style={styles.input} 
				onChangeText={props.onChangeText}
				secureTextEntry={props.secureTextEntry}
				defaultValue={props.defaultValue} 
				placeholder={props.title}/>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
		width: 200,
	},
	text: {},
	input: {
		borderBottomColor: "#000",
		borderLeftColor: "#fff",
		borderTopColor: "#fff",
		borderRightColor: "#fff",
		borderWidth: 2,
		height: 40,
		width: 200,
		backgroundColor: "#fff",
	},
});

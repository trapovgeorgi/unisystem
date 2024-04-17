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
		width: 250,
	},
	text: {},
	input: {
		borderColor: "#fff",
		borderBottomColor: "gray",
		borderWidth: 3,
		height: 40,
		backgroundColor: "#fff",
		placeholder: "#ccc"
	},
});

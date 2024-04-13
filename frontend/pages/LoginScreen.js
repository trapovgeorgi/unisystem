import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import Input from "../components/form/Input";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function LoginScreen(props) {
	const [auth, setAuth] = useContext(AuthContext);

	const [username, setUsername] = useState("mitko");
	const [password, setPassword] = useState("mitko");
	const [error, setError] = useState(null);

	async function login() {
		const url = "http://192.168.123.108:8000/login";
		const isUserOk = (await axios.post(url, { username, password })).data;

		console.log(isUserOk);

		if (isUserOk == true) setAuth(username);
		else {
			setError("Грешно Име или Парола");
		}
	}

	return (
		<View style={styles.container}>
			{error ? <Text style={{color: "red"}}>{error}</Text> : <></>}

			<Input title={"Име"} onChangeText={(t) => setUsername(t)} />
			<Input title={"Парола"} onChangeText={(t) => setPassword(t)} secureTextEntry />
			<Button title="Вход" color={"black"} onPress={login} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	text: {
		color: "white",
	},
});

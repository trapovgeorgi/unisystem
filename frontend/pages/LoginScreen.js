import { Button, StyleSheet, Text, Image, View } from "react-native";
import Input from "../components/form/Input";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useApi } from "../api/useApi";

const tuLogo = require('../assets/TUSlogosimple.png');

export default function LoginScreen(props) {
	const [, setAuth] = useContext(AuthContext);

	const [facnum, setFacnum] = useState("111111111");
	const [egn, setEgn] = useState("0000000000");
	const [error, setError] = useState(null);

	const api = useApi();

	async function login() {
		let userToken = {};
		try {
			userToken = (await api.post("/login", { facnum, egn })).data;
		} catch (error) {
			setError("Няма Връзка с Бекенд");
			console.error(error);
			return;
		}

		if (userToken == false) {
			setError("Грешно Име или Парола");
		}
		if (userToken.length == 80) {
			setAuth(userToken);
		}
	}

	return (
		
		<View style={styles.container}>
			{error ? <Text style={{ color: "red" }}>{error}</Text> : <></>}
			<Image source={tuLogo} style = { styles.img} ></Image>
			<Input title={"Име"} onChangeText={(t) => setFacnum(t)} defaultValue={facnum} />
			<Input title={"Парола"} onChangeText={(t) => setEgn(t)} defaultValue={egn} secureTextEntry />
			<Button title="Вход" color={"#3352A8"} onPress={login} />
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
	img : {
		width : 250,
		height : 250,
	}
});

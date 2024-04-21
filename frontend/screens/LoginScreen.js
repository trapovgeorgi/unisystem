import CheckBox from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { Button, StyleSheet, Text, Image, View } from "react-native";
import Input from "../components/form/Input";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { PushContext } from "../context/PushContext";
import { useApi } from "../api/useApi";

const tuLogo = require("../assets/TUSlogosimple.png");

export default function LoginScreen(props) {
	const [, setAuth] = useContext(AuthContext);
	const [pushToken] = useContext(PushContext);

	//const [facnum, setFacnum] = useState("121221000");
	const [facnum, setFacnum] = useState("000000001");
	const [egn, setEgn] = useState("0000000000");
	const [savedToken, setSavedToken] = useState(false);
	const [error, setError] = useState(null);

	const api = useApi();

	async function authLogin() {
		try {
			const auth = await LocalAuthentication.authenticateAsync();
			if (auth.success) {
				let user = (await api.get(`/authlogin/${savedToken}`)).data;
				console.log(user);
				if (!user) throw new Error();
				setAuth(user);
			}
		} catch (error) {
			await AsyncStorage.clear()
			setSavedToken(false)
			console.error(error);
			return;
		}
	}
	async function login() {
		let user = {};
		try {
			user = (await api.post("/login", { facnum, egn, pushToken })).data;
		} catch (error) {
			setError("Няма Връзка с Бекенд");
			console.error(error);
			return;
		}
		if (!user) {
			setError("Грешно Име или Парола");
		} else {
			if (user.api_token.length == 80) {
				await AsyncStorage.setItem("token", user.api_token);
				setAuth(user);
			}
		}
	}

	async function checkSavedToken() {
		setSavedToken(await AsyncStorage.getItem("token"));
	}

	useEffect(() => {}, [pushToken]);
	useEffect(() => {
		checkSavedToken();
	}, []);

	return (
		<View style={styles.container}>
			{error ? <Text style={{ color: "red" }}>{error}</Text> : <></>}
			<Image source={tuLogo} style={styles.img}></Image>
			<Input title={"Име"} onChangeText={(t) => setFacnum(t)} defaultValue={facnum} />
			<Input title={"Парола"} onChangeText={(t) => setEgn(t)} defaultValue={egn} secureTextEntry />
			<Button title="Вход" color={"#3352A8"} onPress={login} />
			{savedToken && <Button title="Удостоверен Вход" color={"#444"} onPress={authLogin} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		gap: 15,
	},
	text: {
		color: "white",
	},
	img: {
		width: 250,
		height: 250,
	},
	checkBoxContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 8,
		width: 200,
	},
});

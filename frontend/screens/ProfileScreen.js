import { useContext, useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useApi } from "../api/useApi";

const tuLogo = require("../assets/TUSlogosimple.png");

export default function ProfileScreen() {
	const [auth, setAuth] = useContext(AuthContext);
	const [student, setStudent] = useState(null);
	const api = useApi();

	async function getData() {
		try {
			const data = await (await api.get("/profile")).data;
			setStudent(data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		getData();
	}, []);

	function existRender(text, key) {
		if (key) {
			return (
				<View style={styles.info}>
					<View style={styles.infoBall}></View>
					<Text style={styles.infoText}>
						{text}: {key}
					</Text>
				</View>
			);
		} else return <></>;
	}

	return (
		<ScrollView>
			<View style={styles.topContainer}>
				<Text style={styles.text}>{student?.name}</Text>
				<Image style={styles.topImage} source={tuLogo} />
			</View>
			<View style={styles.infoContainer}>
				{existRender("ОКС", student?.eqd)}
				{existRender("Факултетен номер", student?.facnum)}
				{existRender("Факултет", student?.group?.specialty?.faculty?.name)}
				{existRender("Специалност", student?.group?.specialty?.name)}
				{existRender("Вид обучение", student?.eqd_type)}
				{existRender("Група", student?.group?.id)}
				{existRender("Състояние", student?.state)}
				{existRender("Записан семестър", student?.semester)}
				{existRender("E-mail", student?.mail)}
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	topContainer: {
		height: 150,
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
	},
	topImage: {
		width: 70,
		height: 60,
	},
	infoContainer: {
		width: "100%",
		backgroundColor: "#fff",
		alignItems: "flex-start",
		justifyContent: "space-between",
		paddingVertical: 30,
		paddingHorizontal: 10,
		rowGap: 10,
	},
	info: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
	},
	infoBall: {
		backgroundColor: "#3352A8",
		borderColor: "#3352A8",
		height: 20,
		width: 20,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 100,
	},
	infoText: {
		paddingHorizontal: 10,
		paddingVertical: 20,
		textAlign: "center",
		backgroundColor: "#fff",
	},
});
